import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthService,
        private router: Router) { }

    LoginData = {
        account: '98765',
        password: '123456'
    }

    ngOnInit() {
        this.login();
    }

    login() {
        this.authService.login(this.LoginData.account, this.LoginData.password)
            // .subscribe((value: any) => {
            //   alert('Login efetuado com sucesso!!!');
            //   localStorage.setItem('token', value.idToken);

            //   this.authService.setUser({
            //     id: value.localId,
            //     email: value.email,
            //   });

            //   this.router.navigateByUrl('/');
            // },
            // (error) => {
            //   switch (error.error.error.message) {
            //     case 'EMAIL_NOT_FOUND':
            //       alert('E-mail não encontrado');
            //       break;
            //     case 'INVALID_PASSWORD':
            //       alert('Senha inválida');
            //       break;
            //     default:
            //       alert('Houve um erro');
            //       break;
            //   }
            // });
            .then((value: any) => {
                alert('Login efetuado com sucesso!!!');
                localStorage.setItem('token', value.token);

                this.authService.setUser({
                    name: value.name,
                    email: value.email,
                    account: value.account
                });

                this.router.navigateByUrl('/');
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
    }

}
