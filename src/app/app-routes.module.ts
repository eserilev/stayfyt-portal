import { AuthGuardService } from './services/auth-guard.service';
import { SecureComponent  } from './layouts/secure/secure.component';
import { SECURE_ROUTES } from './layouts/secure/secure.routes';
import { PUBLIC_ROUTES } from './layouts/public/public.routes';
import { PublicComponent } from './layouts/public/public.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './public/register/register.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
    { path: '', component: SecureComponent, children: SECURE_ROUTES, canActivate:[AuthGuardService]},
    { path: '**', redirectTo: 'login' },
    { path: 'register', component: RegisterComponent}
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutesModule {}