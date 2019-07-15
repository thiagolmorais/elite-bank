import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    imgSrc = '../../../assets/img/menu.png';
    active: Boolean = false;

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

    menuResponsive() {
        this.active = !this.active;
        if (this.active) {
            this.imgSrc = '../../../assets/img/close.png';
        } else {
            this.imgSrc = '../../../assets/img/menu.png';
        }
    }
}
