import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { TransferComponent } from './transfer/transfer.component';
import { FormsModule } from '@angular/forms';
import { ExtractComponent } from './extract/extract.component';

const routes: Routes = [
    { path: '', component: LoggedComponent },
    { path: 'home', component: HomeComponent },
    { path: 'extract', component: ExtractComponent },
];

@NgModule({
    declarations: [
        LoggedComponent,
        HomeComponent,
        TransferComponent
        ExtractComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
