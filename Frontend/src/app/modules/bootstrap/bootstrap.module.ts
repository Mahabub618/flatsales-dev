import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule,
    ButtonsModule,
    BsDatepickerModule,
    BsDropdownModule,
  ],
  exports: [
    TabsModule,
    ButtonsModule,
    BsDatepickerModule,
    BsDropdownModule,
  ]
})
export class BootstrapModule { }
