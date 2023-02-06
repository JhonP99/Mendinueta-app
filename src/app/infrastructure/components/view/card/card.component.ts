import {Component, Input, OnInit} from '@angular/core';
import {CardPropertiesModel} from "../../../../application/models/card-properties.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() properties!: CardPropertiesModel;
  constructor() { }

  ngOnInit(): void {
  }

}
