import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AerolineaModel } from '../models/aerolineas.model';

@Injectable({
  providedIn: 'root'
})
export class AerolineasService {

  private url = "http://localhost:8082/administracion/aerolineas"

  constructor( private http: HttpClient) { }


  obtenerAerolineas(){
    const headers = this.obtenerToken();
    return this.http.get(`${ this.url}`,{headers})
    .pipe(
      map( this.crearArreglo )

    )
  }

  obtenerAerolinea(id:number): Observable<AerolineaModel>{
    const headers = this.obtenerToken();
    return this.http.get<AerolineaModel>(`${ this.url }/${id}`,{headers})
  }

  editarAerolinea( aerolinea: AerolineaModel){
    console.log(aerolinea);
    const headers = this.obtenerToken();
    return this.http.put(`${ this.url }/${ aerolinea.id }`,aerolinea ,{headers});
  }


  private crearArreglo( aerolineasObj: object){

    const aerolineas: AerolineaModel[] = [];

    if( aerolineasObj === null ) { return []; }

    Object.keys( aerolineasObj ).forEach( key => {
      const aerolinea: AerolineaModel = aerolineasObj[key];
      aerolineas.push( aerolinea );
    })

    return aerolineas;
  }

  obtenerToken(){
    const headers = {
      'Authorization': "Bearer"+localStorage.getItem('token')
    }
    return headers;
  }
}
