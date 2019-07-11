import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  destAccount(accountNumber) {
    return this.httpClient.get('http://localhost:3000/accounts/' + accountNumber);
  }

  transferValue(originAccountNumber, destAccountNumber, transferValue) {
    console.log("Conta origem: " + originAccountNumber)
    console.log("Conta destino: " + destAccountNumber)
    console.log("Valor da transferencia: " + transferValue)

    return this.httpClient.post('http://localhost:3000/transfer/', {origin: originAccountNumber, destination: destAccountNumber, value: transferValue });
  }
}
