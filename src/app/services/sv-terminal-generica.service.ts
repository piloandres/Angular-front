import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TerminalGenericaRequest } from '../models/sv-terminal-generica-request-dto.model';
import { TerminalGenericaResponse } from '../models/sv-terminal-generica-response-dto.model';

@Injectable({
  providedIn: 'root'
})
export class SvTerminalGenericaService {

  constructor(
    private http: HttpClient
  ) { }

  //utilizar esta funcion
  solicitarTerminalGenerica(terminalGenericaRequest: TerminalGenericaRequest): Observable<TerminalGenericaResponse>{
    let uri = `${environment.svTerminalGenericaUri}`
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic cGV0aTpzc29wcnVlYmFz'
      })
    }

    return this.http.post<TerminalGenericaResponse>(uri, terminalGenericaRequest, httpOptions)
      .pipe( retry(2), tap( d => console.log('consulta Smart Vista Terminal Generica')),
        catchError(this.handleError<any>('consulta Smart Vista Terminal generica'))
      )
  }

  private handleError<T>(operacion, resultado?:T){
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operacion} failed: ${error.message}`);
      return throwError(error)
    }
  }
}
