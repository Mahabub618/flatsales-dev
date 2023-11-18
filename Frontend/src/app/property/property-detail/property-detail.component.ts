import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HousingService} from "../../services/housing.service";
import {House} from "../../models/House";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit{
  public propertyId = 1;
  property = new House();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService) {
  }
  ngOnInit() {
    console.log("YES COME");
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
      console.log("propertyId", this.propertyId);
      this.housingService.getProperty(this.propertyId).subscribe((data : any) => {
        this.property = data;
      })
    })
  }
  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail/' + this.propertyId])
  }
}
