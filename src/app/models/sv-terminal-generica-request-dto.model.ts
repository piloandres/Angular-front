export class TerminalGenericaRequest{
    public tipoServicio: String = '01';
    public codigoOriginador: String = '3';
    public codigoComercio: String;
    public solicitudTerminales: SolicitudTerminal[] = [new SolicitudTerminal()];
    public direccionInstalacion: DireccionInstalacion = new DireccionInstalacion();
}

export class SolicitudTerminal{
    public cantidadTerminales: number = 1;
    public idTerminales: String[] = [];
    public dueno: String = '50145001';
    public tipoDispositivo: String = 'TRMT0004';
    public tipoComunicacion: String = '50125009';
    public tipoIntegracionTEF: String = '50105000';
    public indicadorPropina: Number = 0;
    public indicadordeReferencia: string;
    public marcaDispositivo: String = "";
    public indicadorICA: string;
    public indicadorIVA: string;
    public idServicio: String[] = [];
    public direccionDeInstalacion: DireccionInstalacion;
    public estadoTerminal: String = 'TRMS0001';
    public serial: String = "";
    public sello: String = "";
    public numeroCaja: String = "";
    public codigoArrendamiento: String = '50040009';
    public fechaDeseada: String;
    public fechaRetiroProgramado: String = "";
    public numeroTerminalFisicaMulticomercio: String = "";
    public observaciones: String;
}

export class DireccionInstalacion {
  public pais: String;
  public direccionNumero: String;
  public codigoRegion: String;
  public latitud: Number;
  public longitud: Number;
}