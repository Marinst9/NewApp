import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Client';
  //isUserLoggedIn: boolean = false;
users:any;
    constructor( private accountService:AccountService){}

  
    ngOnInit(): void {
      var user  = this.accountService.getUser();
      this.accountService.setUser(user); 
    
}
}