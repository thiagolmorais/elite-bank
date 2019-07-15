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
import { ReuseComponentModule } from '../reuse-component/reuse-component.module';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: '', component: LoggedComponent,
        children: [
            { path: '', redirectTo: 'extract', pathMatch: 'full' },
            { path: 'extract', canActivate: [AuthGuard], component: ExtractComponent },
            { path: 'transfer', canActivate: [AuthGuard], component: TransferComponent }
        ]
    },
];

@NgModule({
    declarations: [
        LoggedComponent,
        HomeComponent,
        TransferComponent,
        ExtractComponent,
        HeaderComponent,
        MenuComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReuseComponentModule,
        RouterModule.forChild(routes)
    ]
})
export class LoggedModule { }
