import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    const cookie: string | null = null; // aquí consultaremos la cookie al navegador

    const checkCookie = (): boolean => {
      console.log('info: ', cookie)
      if (cookie !== null) {
        return true;
      } else {
        this.router.navigate(['/', 'auth', 'login']); // Usar this.router para navegar
        return false;
      }
    }
    return checkCookie();
  }
    
}
