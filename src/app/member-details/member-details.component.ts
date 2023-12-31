import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  userId: number;
  userName: string;
  user: any;
  constructor(private userService:UserService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       
      this.userId = +params['id'];
      console.log('User ID:', this.userId);
     // this.userName = params['userName'];
      // Ovde možete koristiti this.userId za prikazivanje ID-a u šablonu
      this.userService.getUserById(this.userId).subscribe(user => {
        this.userName = user.userName;
   
      });
     
    });
  }
  
  }

 


