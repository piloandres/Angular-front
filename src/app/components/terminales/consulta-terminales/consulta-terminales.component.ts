import { Component, OnInit } from '@angular/core';
import { InfoBuscarTerminalDto } from 'src/app/models/InfoBuscarTerminalDto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-terminales',
  templateUrl: './consulta-terminales.component.html'
})
export class ConsultaTerminalesComponent implements OnInit {

  objetoBusqueda: InfoBuscarTerminalDto = new InfoBuscarTerminalDto();

  constructor() { }

  ngOnInit(): void {
  }

  buscarTerminal(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Buscando terminal..'
    });
    Swal.showLoading();

    console.log(this.objetoBusqueda);

    Swal.close();
  }

}
