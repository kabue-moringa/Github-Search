import { Component, OnInit } from '@angular/core';
import {ReposServiceService} from '../service/repo-service.service';
import {RepoList} from '../repo-list';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  myRepos: RepoList[];
  constructor(public repoService: ReposServiceService) { }

  findRepo(username: string){
    this.repoService.getRepoInfo(username).subscribe((data: RepoList[]) => {
      this.myRepos = data;
      console.log(this.myRepos);

    })
  }
  ngOnInit() {
    this.findRepo('kabue-moringa');
  }


}
