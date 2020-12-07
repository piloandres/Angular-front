import { Component, OnInit } from '@angular/core';
import { CrearTerminalDto } from 'src/app/models/crearTerminalDto';
import { IdServicioDto } from 'src/app/models/servicioDto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-terminal',
  templateUrl: './crear-terminal.component.html'
})
export class CrearTerminalComponent implements OnInit {

  creacionTerminal: CrearTerminalDto;
  listaServicios: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listaServicios = this.poblarListaServicios();
  }

  crearTerminal(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Creando terminal...'
    });
    Swal.showLoading();


    this.creacionTerminal = new CrearTerminalDto();
    this.creacionTerminal.solicitudTerminales.idServicio = [];

    this.listaServicios.forEach((servicios) =>{
      if(servicios.enabled){

        let servicio: IdServicioDto = new IdServicioDto();
        let fecha = new Date();

        servicio.numService = servicios.codigo;
        servicio.fechaInicio = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
        servicio.fechaFin = "";

        this.creacionTerminal.solicitudTerminales.idServicio.push(servicio);
      }

    });


    // Aquí se debe llamar el servicio de creación de terminales y enviarle el objeto
    console.log(this.creacionTerminal);

    Swal.close();

  }


  private poblarListaServicios(){
    const listaServicios: any[] = [
      {"nombre": "3D SECURE", "codigo": "50170009", "enabled": false},
      {"nombre": "API", "codigo": "50170010", "enabled": false},
      {"nombre": "Link de pagos", "codigo": "50170011", "enabled": false},
      {"nombre": "Botón de pago", "codigo": "50170012", "enabled": false},
      {"nombre": "PAGO", "codigo": "50170013", "enabled": false},
      {"nombre": "Web de pagos", "codigo": "50170014", "enabled": false},
      {"nombre": "Pago recurrente", "codigo": "50170015", "enabled": false},
      {"nombre": "Recaudos", "codigo": "50170016", "enabled": false},
      {"nombre": "Gestor de recaudo", "codigo": "50170017", "enabled": false},
      {"nombre": "Mi pago", "codigo": "50170018", "enabled": false}

    ]
    return listaServicios;
  }

}
