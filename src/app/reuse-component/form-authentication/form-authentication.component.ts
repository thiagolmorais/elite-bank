import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login } from 'src/model/login';
import { generateKeyboardNumbers } from 'src/utils/utils';

@Component({
    selector: 'app-form-authentication',
    templateUrl: './form-authentication.component.html',
    styleUrls: ['./form-authentication.component.scss']
})
export class FormAuthenticationComponent implements OnInit {

    randomNumbers: Array<number> = [];
    password: String = "";
    @Input() loginData: Login;
    @Input() dataLoading: Boolean;
    @Input() errorMessage: String;
    @Input() logged: Boolean = false;
    @Output() loginEvent = new EventEmitter<Login>();

    constructor() { }

    ngOnInit() {
        let minValue = 0;
        let maxValue = 9;
        this.randomNumbers = generateKeyboardNumbers(minValue, maxValue, 5);
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
        this.loginEvent.emit();
    }

}
