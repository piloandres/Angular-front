import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarUsuario = false;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor'
    });
    Swal.showLoading();

    this.auth.login( this.usuario )
    .subscribe( resp => {

      console.log(resp)
      Swal.close();
      this.router.navigateByUrl('/home');

      }, (err) =>{

      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: err.error.error_description
      })

    });

  }

}
