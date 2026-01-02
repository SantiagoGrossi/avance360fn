import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';
import { TestComponent } from 'src/app/test/test.component';



export const AuthLayoutRoutes: Routes = [

    { title:"Home",path: "home", component: HomeComponent },
    { title:"test",path: "test", component: TestComponent },


];
