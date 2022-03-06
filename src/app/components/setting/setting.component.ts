import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { SettingService } from 'src/app/services/setting.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  userList: User;

  constructor(
    private route: Router,
    private settingservice: SettingService,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
  this.getAllUsers();
  }
  
  getAllUsers() {
    this.authservice.getUsers().subscribe(
      (res) =>{
        this.userList = res
        console.log('setting', this.userList)
      } 
      
    )
  }

}
