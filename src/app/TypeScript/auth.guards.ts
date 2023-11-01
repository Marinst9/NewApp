import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn:boolean=false;
  loggedIn: boolean = false;
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): boolean {
    if (this.userIsLoggedIn()) {
      return true; // User is logged in, allow access.
    } else {
      // If there is no token and user in local storage, prevent access and redirect to 'home'.
      this.router.navigate(['/home']);
      return false;
    }
  }

  private userIsLoggedIn(): boolean {
    const userJson = localStorage.getItem('user');
    // Check if there is a valid user object in local storage.
    return !!userJson;
  }
}
export class AppComponent{
  constructor (private toastr:ToastrService){}
  showSuccessToast(){
    this.toastr.success('This is a success message','Success');
  }
}
