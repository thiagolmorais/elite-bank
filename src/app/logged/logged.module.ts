import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { TransferComponent } from './transfer/transfer.component';
import { FormsModule } from '@angular/forms';
import { ExtractComponent } from './extract/extract.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
    {
        path: '', component: LoggedComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'extract', component: ExtractComponent },
            { path: 'transfer', component: TransferComponent }
        ]
    },
    // { path: 'extract', component: ExtractComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'transfer', component: TransferComponent },
];

@NgModule({
    declarations: [
        LoggedComponent,
        HomeComponent,
        TransferComponent,
        ExtractComponent,
        HeaderComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
