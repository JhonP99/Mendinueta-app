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
        urlImage:"https://images.pexels.com/photos/7681671/pexels-photo-7681671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title:"Social Media",
        urlImage:"https://images.pexels.com/photos/13399448/pexels-photo-13399448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title:"Paginas Web",
        urlImage:"https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title:"Diseño de marca",
        urlImage:"https://images.pexels.com/photos/3585001/pexels-photo-3585001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  }
}
