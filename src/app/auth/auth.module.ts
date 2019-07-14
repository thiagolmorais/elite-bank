import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DigitOnlyDirective } from '../../directives/digit-only.directive';
import { FormAuthenticationComponent } from '../form-authentication/form-authentication.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
    declarations: [
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        DigitOnlyDirective,
        FormAuthenticationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})
export class AuthModule { }
