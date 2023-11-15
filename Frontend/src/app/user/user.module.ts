import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BootstrapModule} from "../modules/bootstrap/bootstrap.module";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegisterComponent} from "./user-register/user-register.component";


@NgModule({
  declarations: [    UserLoginComponent,
    UserRegisterComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    BootstrapModule
  ],
  exports: [    UserLoginComponent,
    UserRegisterComponent]
})
export class UserModule { }
