import { TestBed } from '@angular/core/testing';

import { TransferService } from './transfer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ELITE_BANK_API } from '../../app.api';

describe('TransferService', () => {
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
    const service: TransferService = TestBed.get(TransferService);
    expect(service).toBeTruthy();
  });

  it('deve receber o objeto retorno do cliente destino', () => {
    const service = TestBed.get(TransferService);
    const accountNumber = 100001;

    const fakeData = {
      "response":true,
      "message":{
                  "name":"joao",
                  "account":100001
                }
    };

    service.destAccount(accountNumber)
    .subscribe(dados => {
      const { response, message, message: { name, account } } = dados;

      expect(Object.keys(dados).length).toBe(2);
      expect(Object.keys(message).length).toBe(2);
      expect(response).toBe(true);
      expect(name).toBe('joao');
      expect(account).toBe(100001);
    });

    const req = httpMock.expectOne(`${ELITE_BANK_API}/accounts/${accountNumber}`);
    expect(req.request.method).toBe('GET');
    req.flush(fakeData);
  });

});
