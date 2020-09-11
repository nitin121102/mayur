import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthenticationService,  public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
//   canActivate1(): boolean {
//     if (!this.auth1.isLogged()) {
//       this.router.navigate(['/']);
//       return false;
//     } else {
//       return true;
//     }
//   }
  
}


