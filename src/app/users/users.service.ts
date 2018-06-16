import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersItem } from './user.model';

const baseUrl = "https://api.github.com/users"
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient) { }

    
    getUsers () {
      var usersUrl = baseUrl; 
      return this.http.get<UsersItem[]>(usersUrl)
    }

    getUserPublicRepositories(userName){
      var repoUrl = baseUrl + '/' + userName +'/repos'
 
      var options = {
        params: new HttpParams().set('type', 'owner')
      }

      return this.http.get(repoUrl, options)

    }
}
