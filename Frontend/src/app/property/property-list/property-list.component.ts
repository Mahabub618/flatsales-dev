import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {ReplaySubject, Subject, takeUntil} from 'rxjs';
import { HousingService } from 'src/app/services/housing.service';
import {ActivatedRoute} from "@angular/router";
import {IHouse} from "../../models/IHouse";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit, OnDestroy{
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  properties: Array<IHouse> = [];
  SellRent: number = 1; // 1 means Buy; 2 means Rent;
  constructor(private housingService: HousingService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getHouses();
  }
  getHouses() {
    // Below route snapshot is used based on
    // routerLink of "Buy" and "Sell" of nav-bar.component.html
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response : IHouse[]) =>{
        this.properties = response.filter((val) => val.SellRent === this.SellRent);

        const allProperties = JSON.parse(localStorage.getItem('newProp') || "[]");
        const localProperties : Array<IHouse> = allProperties.filter((val: IHouse) => val.SellRent === this.SellRent);
        this.properties = [...this.properties, ...localProperties];
        // console.log(this.properties);
        //  this.properties = response;
      });
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
