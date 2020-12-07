import { IdServicioDto } from './servicioDto';

export class SolicitudTerminales{
  cantidadTerminales: number;
  idTerminales: string[] = [];
  dueno: string = '50145001';
  tipoDispositivo: string = 'TRMT0004';
  tipoComunicacion: string = '50125009';
  tipoIntegracionTEF: string = '50105000';
  marcaDispositivo: string = '';
  indicadorICA: string;
  indicadorIVA: string;
  idServicio: IdServicioDto[] = [];
  indicadorPropina: string;
  indicadordeReferencia: string;
  estadoTerminal: string = 'TRMS0001';
  razonEstado: string = '';
  serial: string = '';
  sello: string = '';
  numeroCaja: string = '';
  codigoArrendamiento: string = '50040009';
  fechaDeseada: string = '';
  fechaRetiroProgramado: string = '';
  numeroTerminalFisicaMulitcomercio: string = '';
  observaciones: string = '';
}
