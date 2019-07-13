import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ELITE_BANK_API } from '../app.api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pUser = new BehaviorSubject(null);
  currentUser = this.pUser.asObservable();

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  login(account, password) {
    return this.httpClient.post(`${ELITE_BANK_API}/login`, {
      account,
      password
    });
  };

  setUser(user) {
    this.pUser.next(user);
  };

  checkToken() {
    const token = localStorage.getItem('token');
    const account = localStorage.getItem('account');

    if (!token) {
        this.router.navigateByUrl('/login');
    } else {
      return this.httpClient.post(`${ELITE_BANK_API}/checktoken`, {
        account: account,
        token: token
      })
      .subscribe((dados: any) => {
        const { response, message } = dados;
        if(!response) {
            alert(`Erro: ${message}`);
            return;
        }
  
        const { account, balance, name } = message;
  
        this.setUser({
            name: name,
            balance: balance,
            account: account
        });
      });
    }
  };

  async logout(account, token) {
     const logout = await this.httpClient.post(`${ELITE_BANK_API}/logout`, {
      account: account,
      token: token
    });

    localStorage.removeItem('token');
    this.setUser(null);

    return logout;
  };

}
