import {Component, Input, OnInit} from '@angular/core';
import {CardServiceModel} from "../../../../application/models/services.card.model";
import * as url from "url";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!:CardServiceModel;
  cardStyle!:string;
  constructor() { }

  ngOnInit(): void {
    this.cardStyle = `background: url(${this.card.urlImage})`
  }

}
