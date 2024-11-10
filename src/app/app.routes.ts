import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './gurds/auth.guard';

export const routes: Routes = [
   { path:'auth',component:AuthenticationComponent},
   { path:'',component:LayoutComponent,
    children:[{
       path:'',        
       canActivate: [authGuard],   
       loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path:'user-management',   
        data: { requiresAdmin: true },
        canActivate: [authGuard],      
        loadComponent: () => import('./user-management/user-management.component').then(m => m.UserManagementComponent)
     },
     {
        path:'settings',   
        data: { requiresAdmin: true },
        canActivate: [authGuard],      
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent)
     },
     {
        path:'profile',       
        canActivate: [authGuard],      
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
     }]
   },
   {path:'**',redirectTo:""}
];
