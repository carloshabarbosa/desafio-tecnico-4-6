import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersItem } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient) { }

    getUsers () {
      var usersUrl = 'https://api.github.com/users';  // URL to web api
      return this.http.get<UsersItem[]>(usersUrl)
    }
}
