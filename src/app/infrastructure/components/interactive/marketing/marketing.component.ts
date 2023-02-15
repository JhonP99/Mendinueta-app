import { Component, OnInit } from '@angular/core';
import {BodyServiceModel} from "../../../../application/models/body-service.model";
import {MARKETING} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {
  protected title:string = 'Marketing';
  protected marketingProperties: BodyServiceModel = MARKETING;

  constructor() { }

  ngOnInit(): void {
  }

}
