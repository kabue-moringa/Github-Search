import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GithubComponent} from './github/github.component';
import {ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './git/not-found.component';

const routes: Routes = [
  {"path": "home", component: GithubComponent},
   {"path":"repos","component": ReposComponent},
   {"pathMatch": "full", "redirectTo": "home", "path": ""},
   {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
