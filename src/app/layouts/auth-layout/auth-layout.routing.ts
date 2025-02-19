import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';



export const AuthLayoutRoutes: Routes = [

    { path: "home", component: HomeComponent },


];
