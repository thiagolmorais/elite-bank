import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) { }

  destAccount(accountNumber) {
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://elite-bank-api-homolog.herokuapp.com/accounts/' + accountNumber);
  }

  transferValue(originAccountNumber, destAccountNumber, transferValue) {
    return this.httpClient.post('https://cors-anywhere.herokuapp.com/https://elite-bank-api-homolog.herokuapp.com/transfer', {origin: originAccountNumber, destination: destAccountNumber, value: transferValue });
  }
}
