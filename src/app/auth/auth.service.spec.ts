import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ELITE_BANK_API } from '../app.api';

describe('AuthService', () => {
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
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('deve receber todos', () => {
    const service = TestBed.get(AuthService);

    const fakeData = {
      account: '100002', token: 'lçjasf87jasdf8paej89jiasekkaf9sdufajif98asd', name: 'Joao Correntista', balance: 10000
    };

    service.login().subscribe(v => {
      console.log(v);
      expect(v.length).toBe(4);
      expect(v.account).toBe('100002');
      expect(v.token).toBe('lçjasf87jasdf8paej89jiasekkaf9sdufajif98asd');
      expect(v.name).toBe('Joao Correntista');
      expect(v.balance).toBe(10000);
    });

    const req = httpMock.expectOne(`${ELITE_BANK_API}/login`);
    expect(req.request.method).toBe('POST');
    req.flush(fakeData);
  });
});
