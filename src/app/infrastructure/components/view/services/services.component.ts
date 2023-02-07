import { Component, OnInit } from '@angular/core';
import {CardPropertiesModel} from "../../../../application/models/card-properties.model";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public propertiesInput!:CardPropertiesModel[];
  constructor() { }

  ngOnInit(): void {
    this.propertiesInput = [
      {
        title:"Bodas",
        description:"Disfruta tu día y sobre todo recuérdalo siempre.\n" +
          "Amamos hacer tus recuerdos inolvidables",
        imageUrl:"https://static.wixstatic.com/media/1c35ce_3df273264d8444e9a702f9d90a810a53~mv2.jpg/v1/crop/x_0,y_655,w_4912,h_6050/fill/w_315,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ORT_1812.jpg",
        link:"bodas"
      },
      {
        title:"Quinceaños",
        description:"Sólo se vive una vez, pero si lo haces bien, una vez es suficiente.",
        imageUrl:'https://static.wixstatic.com/media/1c35ce_a07323c854744113a661b2bf1166a69f~mv2.jpg/v1/crop/x_0,y_464,w_3456,h_4257/fill/w_315,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_5394.jpg',
        link:'quinceanhos'
      },
      {
        title:"Maternidad",
        description:"Fruto bendito del amor, y la espera más bella de la vida.",
        imageUrl:"https://static.wixstatic.com/media/1c35ce_d08d14e0eb3d40cfa1a47e29ceae3f73~mv2.jpg/v1/crop/x_0,y_8,w_752,h_925/fill/w_315,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/62184484_2265289480174450_4658936220420793515_n.jpg",
        link:'maternidad'
      }
    ];
  }

}
