import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class SettingService {
  private settingUrl = 'setting';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User> {
    return this.http.get<User>(this.settingUrl);
  }
}

