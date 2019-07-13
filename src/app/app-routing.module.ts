import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: '', loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
