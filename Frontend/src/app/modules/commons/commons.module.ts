import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "../../commons/nav-bar/nav-bar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BootstrapModule} from "../bootstrap/bootstrap.module";
import {FilterPipe} from "../../pipes/filter.pipe";
import {SortPipe} from "../../pipes/sort.pipe";

@NgModule({
  declarations: [
    NavBarComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    BootstrapModule
  ],
  exports: [
    NavBarComponent,
    FilterPipe,
    SortPipe
  ]
})
export class CommonsModule { }
