import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPropertyComponent} from "./add-property/add-property.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PropertyListComponent
  },
  {
    path: 'add',
    component: AddPropertyComponent
  },
  {
    path: 'rent',
    component: PropertyListComponent
  },
  {
    path: 'detail/:id',
    component: PropertyDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
