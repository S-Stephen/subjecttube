import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentsubjectComponent } from './currentsubject/currentsubject.component';

const routes: Routes = [
  { path: 'subject/:id', component: CurrentsubjectComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
