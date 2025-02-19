import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private _authService: AuthService,private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var userDetails = JSON.parse(this._authService.getUserDetails());
    if (userDetails.superAdmin == true) {
     return true
    }
    this._router.navigate(['/login']);
    return false;
  }
}
