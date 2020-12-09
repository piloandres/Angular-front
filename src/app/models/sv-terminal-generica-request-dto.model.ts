export class TerminalGenericaRequest{
  constructor(
    public tipoServicio: String,
    public codigoOriginador: String,
    public codigoComercio: String,
    public solicitudTerminales: SolicitudTerminal[]
  ){}
}

export class SolicitudTerminal{
  constructor(
    public cantidadTerminales: String,
    public idTerminales: String[],
    public dueno: String,
    public tipoDispositivo: String,
    public tipoComunicacion: String,
    public tipoIntegracionTEF: String,
    public indicadorPropina: Number,
    public marcaDispositivo: String,
    public idServicio: String[],
    public direccionDeInstalacion: DireccionInstalacion,
    public estadoTerminal: String,
    public serial: String,
    public sello: String,
    public numeroCaja: String,
    public codigoArrendamiento: String,
    public fechaDeseada: String,
    public fechaRetiroProgramado: String,
    public numeroTerminalFisicaMulticomercio: String,
    public observaciones: String,
  ){}
}

export class DireccionInstalacion {
  constructor(
    public pais: String,
    public direccionNumero: String,
    public codigoRegion: String,
    public latitud: Number,
    public longitud: Number,
  ){}
}