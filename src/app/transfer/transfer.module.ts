import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TransferComponent } from './transfer/transfer.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TransferComponent },
];

@NgModule({
  declarations: [
    TransferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TransferModule { }
