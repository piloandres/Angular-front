import { TestBed } from '@angular/core/testing';
import { SVConsultaRequestDTO } from '../models/sv-consulta-request-dto.model';

import { SvConsultaService } from './sv-consulta.service';

describe('SvConsultaService', () => {
  let service: SvConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SvConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should bring data from sv-consulta', () => {
  //   let consultaDTO = new SVConsultaRequestDTO("unicaTerminal", "01000002")
  //   service.consultar(consultaDTO).subscribe( result => {
  //     console.log(result.response)
  //     expect(result.response).toBeDefined();
  //   })
  // })
});
