import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "../../commons/nav-bar/nav-bar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {BootstrapModule} from "../bootstrap/bootstrap.module";

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    BootstrapModule
  ],
  exports: [NavBarComponent]
})
export class CommonsModule { }
