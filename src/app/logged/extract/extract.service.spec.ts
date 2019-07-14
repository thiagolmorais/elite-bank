import { TestBed } from '@angular/core/testing';

import { ExtractService } from './extract.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ELITE_BANK_API } from '../../app.api';

import { Extract } from 'src/model/extract';

describe('ExtractService', () => {
  let httpMock: HttpTestingController = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: ExtractService = TestBed.get(ExtractService);
    expect(service).toBeTruthy();
  });

  it('deve receber o objeto retorno do extrato', () => {
    const service = TestBed.get(ExtractService);
    const accountNumber = 100001;
    const token = localStorage.getItem('token');

    const fakeData = [
      {
        destination: 100001,
        insertedAt: "2019-07-13T04:20:52.267Z",
        origin: 100002,
        preDestinationBalance: 10273,
        preOriginBalance: 4726,
        value: 120},
      {
        destination: 100002,
        insertedAt: "2019-07-13T04:20:52.267Z",
        origin: 100001,
        preDestinationBalance: 10273,
        preOriginBalance: 4726,
        value: 120}
      ];

    service.getExtracts(accountNumber, token)
    .subscribe(dados => {

      expect(Object.keys(dados).length).toBe(2);

      let {0: {destination, origin, preDestinationBalance, preOriginBalance, value}} = dados;
      expect(Object.keys(dados[0]).length).toBe(6);
      expect(destination).toBe(100001);
      expect(origin).toBe(100002);
      expect(preDestinationBalance).toBe(10273);
      expect(preOriginBalance).toBe(4726);
      expect(value).toBe(120);

      expect(Object.keys(dados[1]).length).toBe(6);
    });

    const req = httpMock.expectOne(`${ELITE_BANK_API}/accounts/${accountNumber}/transfers/${token}`);
    expect(req.request.method).toBe('GET');
    req.flush(fakeData);
  });

});
