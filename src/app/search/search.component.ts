import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 search: any;
 repo: any;
  constructor(private searchService: SearchService) {
    this.searchService.getSearchData().subscribe(search => {
      console.log(search);
     // tslint:disable-next-line:align
     this.search = search;
    }

    );
    // tslint:disable-next-line:variable-name
    this.searchService.getSearchData().subscribe((_repo: any) => {
      console.log(_repo);
      this.repo = _repo;
 });


  }
// tslint:disable-next-line:variable-name

  // tslint:disable-next-line:typedef
ngOnInit() {
  }
}
