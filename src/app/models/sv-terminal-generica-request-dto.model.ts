export class TerminalGenericaRequest{
    public tipoServicio: String = '01';
    public codigoOriginador: String = '3';
    public codigoComercio: String;
    public solicitudTerminales: SolicitudTerminal[] = [new SolicitudTerminal()];
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
    public estadoTerminal: String = 'TRMS0001';
    public serial: String = "";
    public sello: String = "";
    public numeroCaja: String = "";
    public codigoArrendamiento: String = '50040009';
    public fechaDeseada: String = null;
    public fechaRetiroProgramado: String = "";
    public numeroTerminalFisicaMulticomercio: String = "";
    public observaciones: String = null;
    public direccionDeInstalacion: DireccionInstalacion = new DireccionInstalacion();
}

export class DireccionInstalacion {
    public pais: String = '170';
    public direccionNumero: String = 'calle 121 C';
    public codigoRegion: String = '11001';
    public latitud: Number = 0;
    public longitud: Number = 0;
}
