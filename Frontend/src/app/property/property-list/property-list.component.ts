import { Component, OnDestroy, OnInit } from '@angular/core';
import {filter, ReplaySubject} from 'rxjs';
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
  SellRent?: number; // 1 means Buy; 2 means Rent;
  City = '';
  SearchCity = '';
  SortByParam = '';
  SortDirection = 'asc';
  hidePropertyDetail: boolean = false;
  constructor(private housingService: HousingService, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.getHouses();
  }
  getHouses() {
    // Below route snapshot is used based on
    // routerLink of "Buy" and "Sell" of nav-bar.component.html
    const buyOrRent = this.route.snapshot.url.toString();
    console.log("buyOrRent", buyOrRent);
    if(buyOrRent) {
      this.SellRent = (buyOrRent === 'buy' ? 2 : 1);
    }
    else {
      this.SellRent = undefined;
      this.hidePropertyDetail = true;
    }
    this.housingService.getAllProperties(this.SellRent)
        .subscribe((response) => {
          if (response && response.length > 0) {
            this.properties = response;
            console.log(this.properties);
          } else {
            console.log('Empty response or invalid data');
          }
        }, (error) => {
          console.error('Error occurred:', error);
        });

  }
  onCityFilter() {
    this.SearchCity = this.City;
  }
  onClearCity() {
    this.SearchCity = '';
    this.City = '';
  }
  onSortDirection() {
    if(this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    }
    else {
      this.SortDirection = 'desc';
    }
  }
  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
