
export class SVConsultaResponseDTO{
  constructor(
    public response: String,
    public code: String,
    public error: String,
    public codBancoIndustria
  ){}
}