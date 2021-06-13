import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import {Users} from '../users';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  users: Users[];
  searchUserName(username: string){
   this.httpServiceService.findUser(username).then(
     () => {
       this.users = this.httpServiceService.users;
       console.log(this.users);
     },
     (error) => {
       console.log(error);
     }
   );
  }
  constructor(public httpServiceService: HttpServiceService) { }

  ngOnInit() {
    this.searchUserName('kabue-moringa');
  }

}
