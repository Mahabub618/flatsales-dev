import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertyListComponent} from "./property/property-list/property-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const appRoutes: Routes =[
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'property',
    loadChildren: () =>
      import('./property/property.module').then((m) => m.PropertyModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
