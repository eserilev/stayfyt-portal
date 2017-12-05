import { PUBLIC_ROUTES } from './layouts/public/public.routes';
import { PublicComponent } from './layouts/public/public.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
   // { path: '**', redirectTo: 'login' }
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutesModule {}