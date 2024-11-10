import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(DatahandlerService);
  const router = inject(Router);
 
const requiresAdmin = route.data?.['requiresAdmin'];
 
  if (authService.loginUser) {
    if(requiresAdmin){
       // return authService.loginUser.role=='Admin';
    }
    return true;  
  } else {
    router.navigate(['/auth']); // Redirect to login if not authenticated
    return false;
  }
};
