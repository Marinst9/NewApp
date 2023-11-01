
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  registerModel = {
    username: '',
    password: ''
  };

  constructor(public accountService: AccountService, private toastr:ToastrService) {}

  register() {
    if (!this.registerModel.username || !this.registerModel.password) {
      this.toastr.error('Please enter both username and password.', 'Error');
     
    }
    this.accountService.register(this.registerModel).subscribe(
      (response: any) => {
        
        // Handle the registration response here if needed
        console.log('Registration success:', response);
      },
      (error) => {
        console.log(error,"ERROR from backend")
        // Handle registration error
        this.toastr.error('An error occurred', 'Error');
      }
    );
  }
}