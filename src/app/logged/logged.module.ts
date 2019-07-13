import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedComponent } from './logged.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
        ExtractComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
