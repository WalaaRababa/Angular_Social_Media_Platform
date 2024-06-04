import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'login',loadComponent:()=>import('./login/login.component').then((mod)=>mod.LoginComponent)},
    {path:'register',loadComponent:()=>import('./register/register.component').then((mod)=>mod.RegisterComponent)
    },
    {path:'home',loadComponent:()=>import('./home/home.component').then((mod)=>mod.HomeComponent)},
    {path:'profile',loadComponent:()=>import('./profile/profile.component').then((mod)=>mod.ProfileComponent)}
];
