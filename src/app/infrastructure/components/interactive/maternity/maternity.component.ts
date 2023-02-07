import { Component, OnInit } from '@angular/core';
import {ServicesCardModel} from "../../../../application/models/services.card.model";
import {CARD_MATERNITY_CONSTANT} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-maternity',
  templateUrl: './maternity.component.html',
  styleUrls: ['./maternity.component.scss']
})
export class MaternityComponent implements OnInit {
  propertiesInput:ServicesCardModel = CARD_MATERNITY_CONSTANT;
  constructor() { }

  ngOnInit(): void {
  }

}
