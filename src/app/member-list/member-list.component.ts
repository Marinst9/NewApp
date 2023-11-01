import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterState } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../_models/user';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  users: any[]; 
  
   public user$: Observable<User>; 


  constructor( private userService:UserService,  private accountService:AccountService, private router:Router ) { }
  ngOnInit() {
    this.user$ = this.accountService.currentUser$;
    this.userService.getUsers(); // Го повикува getUsers методот
     this.userService.getUsers().subscribe((data: User[])=>{
   
      console.log("DATA OD BACKEND", data)
     
      this.users=data;
     }); // Присвојување на users променливата
 
  }
  login(){}
  logout(){
    localStorage.removeItem('user');
  }


}
