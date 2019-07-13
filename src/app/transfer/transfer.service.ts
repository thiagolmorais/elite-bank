import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ELITE_BANK_API } from '../app.api'

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  destAccount(accountNumber) {
    return this.httpClient.get(`${ELITE_BANK_API}/accounts/${accountNumber}`);
  }

  transferValue(originAccountNumber, destAccountNumber, transferValue) {
    const payload = { origin: originAccountNumber, destination: destAccountNumber, value: parseInt(transferValue) }
    console.log(Number.isInteger(originAccountNumber))
    console.log(Number.isInteger(destAccountNumber))
    console.log(Number.isInteger(parseInt(transferValue)))
    return this.httpClient.post(`${ELITE_BANK_API}/transfer`, payload);
  }
}
