import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8082/oauth/token'

  userToken: string;
  expire_in: number;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  login( usuario: UsuarioModel){

    const headers = {
      'Authorization': "Basic QW5ndWxhci1hcHA6MTIzNA==",
      'Content-Type': "application/x-www-form-urlencoded"
    }
      const body = new HttpParams()
        .set('username', usuario.username)
        .set('password', usuario.password)
        .set('grant_type', 'password');

    return this.http.post(`${ this.url }`, body, {headers})
    .pipe(
      map( resp =>{
        this.guardarToken( resp['access_token'], resp['expira_in'])
        return resp;
      })
    );
  }

  private guardarToken( idToken: string, expita_in: number ){

    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(expita_in);

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  logout(){
    localStorage.removeItem('token');
  }

  traducirToken(){
    try{
      return jwt_decode(this.userToken);
    }catch(Error){
      return null
    }
  }

  estaAutenticado(){
    if(this.userToken.length < 2){
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if( expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
  }
}
