import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User={
    _id: '',
    title: '',
    gender: '',
    name: '',
    otherNames: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: '',
    physicalAddress: '',
    phoneNumber: '',
    dob: '',
    terms: undefined
  }

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('_id');
    this.authService.getUserProfile(id).subscribe(res => {
      this.currentUser = res.msg;
    })
   }

  ngOnInit(): void {
    
  }

}
