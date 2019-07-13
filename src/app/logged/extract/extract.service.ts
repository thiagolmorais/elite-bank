import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ELITE_BANK_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {

  constructor(private authService: AuthService) { }

  getExtracts() {

  }
}
