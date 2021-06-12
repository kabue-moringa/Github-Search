import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 userName: string;
 search: any;
 getSearch: any;
 repos: any;
  constructor(private searchService: SearchService) {
    }
    // tslint:disable-next-line:typedef
    userSubmit(){
      console.log(this.userName);
      this.searchService.getSearchData(this.userName).subscribe((search: any) => {
        console.log(search);
        this.search = search;
      });

      this.searchService.getMyRepos().subscribe(repos => {
        this.repos = repos;
      });


//     this.searchService.getSearchData().subscribe((_repo: any) => {
//       console.log(_repo);


  }

// tslint:disable-next-line:variable-name

  // tslint:disable-next-line:typedef
ngOnInit() {
  }
}
