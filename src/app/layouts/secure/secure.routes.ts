import { TrainerHomeComponent } from './../../secure/trainer/trainer-home/trainer-home.component';
import { AuthGuardService } from './../../services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';

export const SECURE_ROUTES: Routes = [
    {path: 'trainer', component: TrainerHomeComponent, canActivate: [AuthGuardService], pathMatch: 'full'}
]