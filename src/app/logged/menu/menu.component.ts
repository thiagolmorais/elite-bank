import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    user$: Observable<any>;

    menuLinks: Array<any> = [
        { name: "Home", route: "/home" },
        { name: "Transferência", route: "/transfer" },
        { name: "Extrato", route: "/extract" }
    ];

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.user$ = this.authService.currentUser;
    }

    logout() {
        this.authService.logout();
    }

}
