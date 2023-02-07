import {Component, Input, OnInit} from '@angular/core';
import {ServicesCardModel} from "../../../../application/models/services.card.model";

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.scss']
})
export class CardServicesComponent implements OnInit {
@Input() properties!:ServicesCardModel;
  constructor() { }

  ngOnInit(): void {
  }

}
