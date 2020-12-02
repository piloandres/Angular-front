import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AerolineaModel } from 'src/app/models/aerolineas.model';
import { AerolineasService } from 'src/app/services/aerolineas.service';

@Component({
  selector: 'app-editar-aerolinea',
  templateUrl: './editar-aerolinea.component.html'
})
export class EditarAerolineaComponent implements OnInit {

  aerolinea: AerolineaModel = new AerolineaModel();

  constructor(private activatedRoute: ActivatedRoute,
              private aerolineaService: AerolineasService,
              private router: Router) { }

  ngOnInit(): void {
    this.cargarAerolinea();
  }

  editarAerolinea( form:NgForm ){
    this.aerolineaService.editarAerolinea( this.aerolinea )
    .subscribe( resp => {
      this.router.navigateByUrl("/aerolineas");
    }
    );
  }

  cargarAerolinea(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.aerolineaService.obtenerAerolinea(id).subscribe((aerolinea) => this.aerolinea = aerolinea)
      }
    })
  }

}
