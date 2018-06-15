import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class UsersService {
  usersUrl = 'https://api.github.com/users';  // URL to web api
  

  constructor(
    private http: HttpClient) { 

    }
    
    getUsers () {
        var teste = this.http.get<string>("usersUrl")
    }
  }
