import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title= "MEAN Project";
  opened = true;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.doLogout()
    
  }

}
