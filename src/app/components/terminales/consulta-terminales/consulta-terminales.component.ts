import { Component, OnInit } from '@angular/core';
import { TerminalModel } from 'src/app/models/terminal.model';
import { SvConsultaService } from 'src/app/services/sv-consulta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-terminales',
  templateUrl: './consulta-terminales.component.html'
})
export class ConsultaTerminalesComponent implements OnInit {

  numeroTerminal: string;
  terminal: TerminalModel = null;

  constructor(private servicioConsulta: SvConsultaService) { }

  ngOnInit(): void {
  }

  buscarTerminal(){
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Buscando terminal..'
    });
    Swal.showLoading();

    console.log(this.numeroTerminal);
    this.servicioConsulta.consultarTerminal(this.numeroTerminal).subscribe(
      resp => this.terminal = new TerminalModel(resp.codigoComercio, resp.indicadorIAC[0], resp.indicadorIVA[0], resp.servicios)
    );

    Swal.close();
  }

}
