import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SVConsultaResponseDTO } from '../models/sv-consulta-response-dto.model';
import { SVConsultaRequestDTO } from '../models/sv-consulta-request-dto.model';
import { TerminalModel } from '../models/terminal.model';
import * as xml2Json from 'xml2js';
import { ServicioTerminalModel } from '../models/servicio-terminal.model';

@Injectable({
  providedIn: 'root'
})
export class SvConsultaService {

  constructor(private http: HttpClient) { }


  //metodo para consulta terminal
  consultarTerminal(codigoTerminal: String): Observable<TerminalModel> {
    let xmlToJsonParser = xml2Json.parseString
    let resultObservable = new Observable<TerminalModel>((observer) => {
      console.log(`Consultando terminal ${codigoTerminal}`)
      let consultaDTO = new SVConsultaRequestDTO("unicaTerminal", codigoTerminal)
      let consultaSVObserver = this.consultar(consultaDTO).subscribe( consultaResponse => {
        xmlToJsonParser(consultaResponse.response, (err, result) => {
          let terminalInfo = this.createTerminalModelFromJson(result)
          observer.next(terminalInfo)
          observer.complete()
          consultaSVObserver.unsubscribe()
        })
      });
      return {
        unsubscribe(){}
      }
    });
    //let consultaTerminal = new SVConsultaRequestDTO("", codigoTerminal)
    return resultObservable
  }

  consultar(consultaDTO: SVConsultaRequestDTO): Observable<SVConsultaResponseDTO>{
    let uri = `${environment.svConsultaUri}`
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    return this.http.post<SVConsultaResponseDTO>(uri, consultaDTO, httpOptions)
      .pipe( retry(2), tap( d => console.log('consulta Smart Vista')),
        catchError(this.handleError<any>('consulta Smart Vista'))
      )
  }

  private createTerminalModelFromJson(terminalJson): TerminalModel {
    const contractData = terminalJson.applications.application[0].customer[0].contract[0]
    const merchant_number = contractData.merchant[0].merchant_number[0]
    const {cst_terminal_iac, cst_terminal_iva} = contractData.merchant[0].terminal[0]
    const services = contractData.service[0].service_object[0].attribute_limit
    let serviciosTerminal = services.map(({$, start_date, end_date}) => {
      return new ServicioTerminalModel($.value, start_date, end_date)
    });
    let terminaResult = new TerminalModel(merchant_number, cst_terminal_iac, cst_terminal_iva, serviciosTerminal)
    return terminaResult
  }

  private handleError<T>(operacion, resultado?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operacion} failed: ${error.message}`);
      return throwError(error)
    }
  }
}
