import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    // { path: '', component: AppComponent },
    { path: '', loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule) },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'transfer', loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
