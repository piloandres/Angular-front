import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-obtener-usuarios',
  templateUrl: './obtener-usuarios.component.html',
  styleUrls: ['./obtener-usuarios.component.css']
})
export class ObtenerUsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios()
    .subscribe( resp => {
      console.log(resp);
    })
  }

}
