import { Component, OnInit } from '@angular/core';
import { AerolineaModel } from 'src/app/models/aerolineas.model';
import { AerolineasService } from 'src/app/services/aerolineas.service';

@Component({
  selector: 'app-obtener-aerolineas',
  templateUrl: './obtener-aerolineas.component.html'
})
export class ObtenerAerolineasComponent implements OnInit {

  aerolineas: AerolineaModel[] = [];

  constructor(private aerolineasService: AerolineasService) { }

  ngOnInit(): void {
    this.aerolineasService.obtenerAerolineas()
    .subscribe( resp => this.aerolineas = resp);
  }

}
