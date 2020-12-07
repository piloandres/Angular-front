import { DireccionDeInstalacionDto } from './direccionInstalacionDto';
import { SolicitudTerminales } from './solicitudTerminalesDto';

export class CrearTerminalDto {
  tipoServicio: string = '01';
  codigoOriginador: string = '3';
  codigoComercio: string;
  solicitudTerminales:SolicitudTerminales;
  direccionDeInstalacion: DireccionDeInstalacionDto;

  constructor(){
    this.solicitudTerminales = new SolicitudTerminales();
    this.direccionDeInstalacion = new DireccionDeInstalacionDto();
  }
}
