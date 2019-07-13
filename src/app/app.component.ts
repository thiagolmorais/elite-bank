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
        this.authService.checkToken();
        this.user$ = this.authService.currentUser;
    }
}
