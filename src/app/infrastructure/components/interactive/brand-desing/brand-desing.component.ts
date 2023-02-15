import { Component, OnInit } from '@angular/core';
import {BodyServiceModel} from "../../../../application/models/body-service.model";
import {BRAND_DESING} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-brand-desing',
  templateUrl: './brand-desing.component.html',
  styleUrls: ['./brand-desing.component.scss']
})
export class BrandDesingComponent implements OnInit {
  protected title:string = 'Diseño de marca';
  protected BDesingProperties:BodyServiceModel = BRAND_DESING;

  constructor() { }

  ngOnInit(): void {
  }

}
