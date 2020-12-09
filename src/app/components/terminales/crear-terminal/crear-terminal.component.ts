import { Component, OnInit } from '@angular/core';
import { TerminalGenericaRequest } from 'src/app/models/sv-terminal-generica-request-dto.model';
import { SvTerminalGenericaService } from 'src/app/services/sv-terminal-generica.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-terminal',
  templateUrl: './crear-terminal.component.html'
})
export class CrearTerminalComponent implements OnInit {

  terminal: TerminalGenericaRequest = new TerminalGenericaRequest();
  listaServicios: any[] = [];

  constructor(private svTerminalGenerica: SvTerminalGenericaService) { }

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


    this.listaServicios.forEach((servicios) =>{
      if(servicios.enabled){

        let numService = servicios.codigo;

        this.terminal.solicitudTerminales[0].idServicio.push(numService);
      }

    });



    console.log(this.terminal);
    this.svTerminalGenerica.solicitarTerminalGenerica(this.terminal).subscribe(
      resp => console.log(resp)
    );

    Swal.close();

  }


  private poblarListaServicios(){
    const listaServicios: any[] = [
      {"nombre": "Comercio tradicional", "codigo": "50170000", "enabled": false},
      {"nombre": "Multicomercio tradicional", "codigo": "50170001", "enabled": false},
      {"nombre": "Multicomercio agencias", "codigo": "50170002", "enabled": false},
      {"nombre": "Multicomercio servicios públicos", "codigo": "50170003", "enabled": false},
      {"nombre": "DCC VISA", "codigo": "50170005", "enabled": false},
      {"nombre": "DCC MC", "codigo": "50170008", "enabled": false},
      {"nombre": "3D SECURE", "codigo": "50170009", "enabled": false},
      {"nombre": "API", "codigo": "50170010", "enabled": false},
      {"nombre": "Link de pagos", "codigo": "50170011", "enabled": false},
      {"nombre": "Botón de pago", "codigo": "50170012", "enabled": false},
      {"nombre": "PAGO", "codigo": "50170013", "enabled": false},
      {"nombre": "Web de pagos", "codigo": "50170014", "enabled": false},
      {"nombre": "Pago recurrente", "codigo": "50170015", "enabled": false}
    ]
    return listaServicios;
  }

}
