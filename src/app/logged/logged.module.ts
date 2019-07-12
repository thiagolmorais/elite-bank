import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
];

@NgModule({
    declarations: [
        LoggedComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
