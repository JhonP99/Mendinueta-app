import {Component, Input, OnInit} from '@angular/core';
import {CardServiceModel} from "../../../../application/models/services.card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!:CardServiceModel;
  constructor() { }

  ngOnInit(): void {
  }

}
