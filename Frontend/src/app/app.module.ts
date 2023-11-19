import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"
import { HousingService } from './services/housing.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserService } from "./services/user.service";
import { AlertifyService } from "./services/alertify.service";
import { AuthService } from "./services/auth.service";
import {CommonsModule} from "./modules/commons/commons.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonsModule,
    HttpClientModule,
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
