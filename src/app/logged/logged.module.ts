import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: LoggedComponent },
    { path: 'transfer', component: TransferComponent },
];

@NgModule({
    declarations: [
        LoggedComponent,
        HomeComponent,
        TransferComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
