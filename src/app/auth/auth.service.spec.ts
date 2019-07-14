import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ELITE_BANK_API } from '../app.api';

describe('AuthService', () => {
  let httpMock: HttpTestingController = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('deve receber o objeto retorno do login', () => {
    const service = TestBed.get(AuthService);

    const fakeData = {
      account: '100002', token: 'lçjasf87jasdf8paej89jiasekkaf9sdufajif98asd', name: 'Joao Correntista', balance: 10000
    };

    service.login()
    .subscribe(response => {
      const { account, token, name, balance } = response;

      expect(Object.keys(response).length).toBe(4);
      expect(account).toBe('100002');
      expect(token).toBe('lçjasf87jasdf8paej89jiasekkaf9sdufajif98asd');
      expect(name).toBe('Joao Correntista');
      expect(balance).toBe(10000);
    });

    const req = httpMock.expectOne(`${ELITE_BANK_API}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(fakeData);
  });

});
