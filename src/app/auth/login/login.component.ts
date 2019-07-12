import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { generateKeyboardNumbers } from 'src/utils/utils';
import { Login } from 'src/model/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    randomNumbers: Array<number> = [];
    loginData: Login = { account: null, password: [] };
    password: String = "";

    constructor(private authService: AuthService,
        private router: Router) { }

    // LoginData = {
    //     account: '98765',
    //     password: '123456'
    // }

    ngOnInit() {
        let minValue = 0;
        let maxValue = 9;
        this.loginData = { account: null, password: [] };
        this.randomNumbers = generateKeyboardNumbers(minValue, maxValue);
        console.log(this.randomNumbers)
    }

    addPasswordNumber(randomNumber: number) {
        if (this.loginData.password.length < 6) {
            this.loginData.password.push(randomNumber);
            this.password += "0";
        }
    }

    deletePassword() {
        this.loginData.password.pop();
        this.password = this.password.slice(0, -1);
    }

    login() {
        this.authService.login(this.loginData.account, this.loginData.password)
            .subscribe((value: any) => {
                console.log(value);
                
            //   alert('Login efetuado com sucesso!!!');
            //   localStorage.setItem('token', value.idToken);

            //   this.authService.setUser({
            //     id: value.localId,
            //     email: value.email,
            //   });

            //   this.router.navigateByUrl('/');
            },
            (error) => {
              switch (error.error.error.message) {
                case 'EMAIL_NOT_FOUND':
                  alert('E-mail não encontrado');
                  break;
                case 'INVALID_PASSWORD':
                  alert('Senha inválida');
                  break;
                default:
                  alert('Houve um erro');
                  break;
              }
            });

            // .then((value: any) => {
            //     alert('Login efetuado com sucesso!!!');
            //     localStorage.setItem('token', value.token);

            //     this.authService.setUser({
            //         name: value.name,
            //         email: value.email,
            //         account: value.account
            //     });

            //     this.router.navigateByUrl('/');
            // })
            // .catch((error) => {
            //     alert(error);
            //     console.log(error);
            // });
    }

}
