import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DigitOnlyDirective } from '../../directives/digit-only.directive';

const routes: Routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
    declarations: [
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        DigitOnlyDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class AuthModule { }
