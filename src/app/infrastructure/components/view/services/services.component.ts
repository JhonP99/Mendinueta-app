import { Component, OnInit } from '@angular/core';
import { CardServiceModel } from "../../../../application/models/services.card.model";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public cards!:CardServiceModel[];
  constructor() { }

  ngOnInit(): void {
    this.cards =[
      {
        title:"Marketing",
        urlImage:""
      },
      {
        title:"Marketing",
        urlImage:""
      },
      {
        title:"Marketing",
        urlImage:""
      },
      {
        title:"Marketing",
        urlImage:""
      }
    ]
  }
}
