import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatePipe } from './date.pipe';
import { ChangeColorDirective } from './change-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    SearchComponent,
    ReposComponent,
    NotFoundComponent,
    DatePipe,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
