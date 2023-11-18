import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPropertyComponent} from "./add-property/add-property.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {PropertyDetailResolverService} from "./property-detail/property-detail-resolver.service";

const routes: Routes = [
  {
    path: 'buy',
    component: PropertyListComponent,
  },
  {
    path: 'rent',
    component: PropertyListComponent,
  },
  {
    path: 'add',
    component: AddPropertyComponent
  },
  {
    path: 'rent/detail/:id',
    component: PropertyDetailComponent,
    resolve: {detail: PropertyDetailResolverService}
  },
  {
    path: 'buy/detail/:id',
    component: PropertyDetailComponent,
    resolve: {detail: PropertyDetailResolverService}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
