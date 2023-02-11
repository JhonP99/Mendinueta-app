import { Component, OnInit } from '@angular/core';
import { ServicesCardModel } from "../../../../application/models/services.card.model";
import {CARD_FIFTEEN_CONSTANT, URLS_GRID_FIFTEEN} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-fifteen',
  templateUrl: './fifteen.component.html',
  styleUrls: ['./fifteen.component.scss']
})
export class FifteenComponent implements OnInit {
  propertiesInput:ServicesCardModel = CARD_FIFTEEN_CONSTANT;
  urlsInput:string[] = URLS_GRID_FIFTEEN;
  constructor() {
  }

  ngOnInit(): void {
  }

}
