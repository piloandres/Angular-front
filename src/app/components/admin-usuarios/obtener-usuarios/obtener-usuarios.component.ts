import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-obtener-usuarios',
  templateUrl: './obtener-usuarios.component.html',
  styleUrls: ['./obtener-usuarios.component.css']
})
export class ObtenerUsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  roles:string[] = ['Riesgos', 'DMA', 'Call center', 'Implementación', 'Administrador', 'Producto']

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios()
    .subscribe( resp => this.usuarios = resp)
  }



}
