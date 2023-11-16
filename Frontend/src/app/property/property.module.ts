import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import {PropertyCardComponent} from "./property-card/property-card.component";
import {PropertyListComponent} from "./property-list/property-list.component";
import {AddPropertyComponent} from "./add-property/add-property.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";
import {MatCardModule} from "@angular/material/card";
import {BootstrapModule} from "../modules/bootstrap/bootstrap.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonsModule} from "../modules/commons/commons.module";

@NgModule({
  declarations: [
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule,
    CommonsModule
  ],
  exports: []
})
export class PropertyModule { }
