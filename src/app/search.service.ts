import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  [x: string]: any;

private username: string;
private clientId = '3f87158d692e02b161eb';
private clientSecret = '531a54ff180677f631900a77f0caba82a16a31c7';
  constructor(private http: HttpClient) {
    // tslint:disable-next-line:quotemark
    this.username = "kabue-moringa";
  }
  // tslint:disable-next-line:typedef
  getSearchData(){
    return this.http.get('https://api.github.com/users/kabue-moringa');
  }
}
