import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'logged', loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule) },
    { path: 'transfer', loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
