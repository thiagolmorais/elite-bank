import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    menuLinks: Array<any> = [
        { name: "Home", route: "/home" },
        { name: "Transferência", route: "/transfer" },
        { name: "Extrato", route: "/extract" }
    ];

    constructor() { }

    ngOnInit() {
    }

}
