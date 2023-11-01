import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private toastr: ToastrService) {}

  showMessage() {
    this.toastr.success('This is a success message!', 'Success');
  }

  ngOnInit(): void {
  }

}
