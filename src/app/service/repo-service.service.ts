import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposServiceService {
  _URL = 'https://api.github.com/users/';
  token = '?access_token=' + environment.GithubKey;
    constructor(public http: HttpClient ) { 
  
    }
  
    getRepoInfo(username: string): Observable<any> {
      return this.http.get(this._URL + username + "/repos?order=created&sort=asc?access_token=")
    }
  }
