import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ELITE_BANK_API } from '../app.api';
import { Router } from '@angular/router';
import { Login } from 'src/model/login';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pUser = new BehaviorSubject(null);
    currentUser = this.pUser.asObservable();

    constructor(private httpClient: HttpClient,
        private router: Router) { }

    login(loginData: Login) {
        return this.httpClient.post(`${ELITE_BANK_API}/login`, {
            account: loginData.account,
            password: loginData.password
        });
    };

    setUser(user) {
        this.pUser.next(user);
    };

    checkToken(account, token) {
        return this.httpClient.post(`${ELITE_BANK_API}/checktoken`, {
            account: account,
            token: token
        })
        .subscribe((dados: any) => {
            const { response, message } = dados;
            if(!response) {
                localStorage.clear();
                this.pUser.next(null);
                this.router.navigateByUrl('/login');
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

    logout() {
        const token = localStorage.getItem('token');
        const account = localStorage.getItem('account');
    
            this.httpClient.post(`${ELITE_BANK_API}/logout`, {
            account: account,
            token: token
        })
        .subscribe(() => {
            localStorage.clear();
            this.pUser.next(null);
            this.router.navigateByUrl('/login');
        });
    };

}
