import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { TransferComponent } from './transfer/transfer.component';
import { FormsModule } from '@angular/forms';
import { ExtractComponent } from './extract/extract.component';
import { FormAuthenticationComponent } from '../form-authentication/form-authentication.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'extract', component: ExtractComponent },
    { path: 'transfer', component: TransferComponent },
];

@NgModule({
    declarations: [
        LoggedComponent,
        HomeComponent,
        TransferComponent,
        ExtractComponent,
        FormAuthenticationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
