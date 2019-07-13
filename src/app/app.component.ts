import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    user$: Observable<any>;

    constructor(private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        const token = localStorage.getItem('token');

        if (!token) {
            this.router.navigateByUrl('/login');
        } else {
            //  VERIFICAR TOKEN AQUI COM SUBSCRIBE
            this.authService.checkToken(token)
            .then((value: any) => {

                this.authService.setUser({
                    name: value.name,
                    balance: value.balance,
                    account: value.account
                });
                // this.router.navigateByUrl('/logged');
            })
            .catch((error) => {
                alert(error);
            });
        }

        this.user$ = this.authService.correntUser;
    }

    logout() {
        this.authService.logout();
    }

}
