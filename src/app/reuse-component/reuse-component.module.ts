import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthenticationComponent } from './form-authentication/form-authentication.component';
import { FormsModule } from '@angular/forms';
import { DigitOnlyDirective } from 'src/directives/digit-only.directive';

@NgModule({
  declarations: [
    FormAuthenticationComponent,
    DigitOnlyDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormAuthenticationComponent
  ]
})
export class ReuseComponentModule { }
