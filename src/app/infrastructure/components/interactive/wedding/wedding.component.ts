import { Component, OnInit } from '@angular/core';
import {ServicesCardModel} from "../../../../application/models/services.card.model";
import {CARD_WEDDING_SERVICE_CONSTANT} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})
export class WeddingComponent implements OnInit {
  propertiesInput: ServicesCardModel = CARD_WEDDING_SERVICE_CONSTANT;

  constructor() { }

  ngOnInit(): void {
  }

}
