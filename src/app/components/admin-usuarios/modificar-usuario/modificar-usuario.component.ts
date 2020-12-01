import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private router: Router,
              private artivatedRoute: ActivatedRoute,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void{
    this.artivatedRoute.params.subscribe(params =>{
      let username = params['username']
      if(username){
        this.usuarioService.obtenerUsuario(username).subscribe((usuario) => this.usuario = usuario)
      }
    })
  }

  modificarUsuario( form:NgForm ){
    this.usuarioService.modificarUsuario( this.usuario )
    .subscribe( resp => {
      this.router.navigateByUrl("/obtener-usuarios");
  });

  }


}
