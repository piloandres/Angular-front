import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://localhost:8082/"

  constructor( private http: HttpClient) { }

  crearUsuario( usuario: UsuarioModel){
    return this.http.post (`${ this.url } /usuarios`,usuario);
  }

  obtenerUsuarios(){
    return this.http.get(`${ this.url}/usuarios`)
  }
}
