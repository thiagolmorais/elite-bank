import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ELITE_BANK_API } from 'src/app/app.api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {

  constructor(private httpClient: HttpClient) { }

  getExtracts(accountNumber) {
    return this.httpClient.get(`${ELITE_BANK_API}/accounts/${accountNumber}/transfers`);
  }
}
