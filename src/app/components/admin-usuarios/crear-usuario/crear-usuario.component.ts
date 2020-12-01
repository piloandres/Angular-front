import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private usuariosService: UsuariosService,
              private router: Router) { }

  ngOnInit(): void {
  }

  guardarUsuario( form: NgForm ){
    this.usuariosService.crearUsuario( this.usuario )
      .subscribe( resp => {
        this.router.navigateByUrl("/obtener-usuarios");
    });

  }

}
