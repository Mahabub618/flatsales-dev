import {Component, Input} from '@angular/core';
import {IHouse} from "../../models/IHouse";

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  @Input() property: IHouse | undefined;
  @Input() hideIcons: boolean | undefined;
  constructor() {
    console.log("Property ", this.property);
  }
}
