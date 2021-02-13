import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from '@app/pages/people/people.component';
import {LandingComponent} from '@component/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent, data: {toolbarTitle: 'Star Wars Explorer'}},
  { path: 'people', component: PeopleComponent, data: {toolbarTitle: 'People'}},

  {path: '**', redirectTo: 'home'}
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
