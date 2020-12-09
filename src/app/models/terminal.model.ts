import { ServicioTerminalModel } from './servicio-terminal.model';

export class TerminalModel {
  constructor(
    public codigoComercio: String,
    public indicadorIAC: String,
    public indicadorIVA: String,
    public servicios: ServicioTerminalModel[]
  ){}
}