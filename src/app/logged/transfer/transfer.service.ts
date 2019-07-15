import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ELITE_BANK_API } from '../../app.api'

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  destAccount(accountNumber) {
    return this.httpClient.get(`${ELITE_BANK_API}/accounts/${accountNumber}`);
  }

  transferValue(password, token, originAccountNumber, destAccountNumber, transferValue) {
    return this.httpClient.post(`${ELITE_BANK_API}/transfer`, {
      password: password,
      userToken: token,
      origin: originAccountNumber,
      destination: destAccountNumber,
      value: parseInt(transferValue)
    });
  }
}
