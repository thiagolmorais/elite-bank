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
            this.router.navigateByUrl('/auth');
        } else {
            //  VERIFICAR TOKEN AQUI COM SUBSCRIBE
            this.authService.checkToken(token)
                .then((value: any) => {

                    this.authService.setUser({
                        name: value.name,
                        email: value.email,
                        account: value.account
                    });
                    this.router.navigateByUrl('/logged');
                })
                .catch((error) => {
                    alert(error);
                    console.log(error);
                });
            // .subscribe((v: any) => {
            //   this.authService.setUser({
            //     id: v.users[0].localId,
            //     email: v.users[0].email,
            //   });
            // });
        }

        this.user$ = this.authService.correntUser;
    }

    logout() {
        this.authService.logout();
    }

}
