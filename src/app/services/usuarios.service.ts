import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = "http://localhost:8082"



  constructor( private http: HttpClient) { }



  crearUsuario( usuario: UsuarioModel): Observable<UsuarioModel>{

    const headers = this.obtenerToken();
    return this.http.post<UsuarioModel>(`${ this.url }/usuarios/`,usuario, {headers});
  }


  obtenerUsuarios(){

    const headers = this.obtenerToken();
    return this.http.get(`${ this.url}/usuarios/`,{headers})
    .pipe(
      map( this.crearArreglo )

    )
  }

  obtenerUsuario( usuario: String ): Observable<UsuarioModel>{
    const headers = this.obtenerToken();
    return this.http.get<UsuarioModel>(`${ this.url }/usuarios/${usuario}`, {headers});
  }


  modificarUsuario( usuario: UsuarioModel){
    const headers = this.obtenerToken();
    return this.http.put(`${ this.url }/usuarios/${ usuario.username }`,usuario ,{headers});
  }


  private crearArreglo( usuariosObj: object){

    const usuarios: UsuarioModel[] = [];

    if( usuariosObj === null ) { return []; }

    Object.keys( usuariosObj ).forEach( key => {
      const usuario: UsuarioModel = usuariosObj[key];
      usuarios.push( usuario );
    })

    return usuarios;
  }


  obtenerToken(){
    const headers = {
      'Authorization': "Bearer"+localStorage.getItem('token')
    }
    return headers;
  }
}
