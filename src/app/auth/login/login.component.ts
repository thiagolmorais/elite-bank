import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/model/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginData: Login = { account: null, password: [] };
    password: String = "";
    dataLoading: Boolean = false;
    errorMessage: String = "";

    constructor(private authService: AuthService,
        private router: Router) { }

    ngOnInit() {
        // Caso já esteja logado, redireciona para logged
        const token = localStorage.getItem('token');
        if(token) {
            this.router.navigateByUrl('');
        }
    }

    login() {
        this.errorMessage = '';
        this.dataLoading = true;
        this.authService.login(this.loginData)
            .subscribe((dados: any) => {

                const { response, message } = dados;
                if (!response) {
                    this.errorMessage = `Erro: ${message}`;
                    this.dataLoading = false;
                    return;
                }

                const { account, balance, name, userToken } = message;

                localStorage.setItem('token', userToken);
                localStorage.setItem('account', account);
                localStorage.setItem('balance', balance);

                this.authService.setUser({
                    balance: balance,
                    name: name,
                });

                this.dataLoading = false;
                this.router.navigateByUrl('');
            },
                (error) => {
                    this.dataLoading = false;
                    this.errorMessage = "Ocorreu um erro.";
                    console.error(error.statusText);
                });
    }

}
