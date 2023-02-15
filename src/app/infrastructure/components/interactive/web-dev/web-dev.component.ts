import { Component, OnInit } from '@angular/core';
import {BodyServiceModel} from "../../../../application/models/body-service.model";
import {WEB_DESING} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent implements OnInit {
  protected title:string = 'Desarrollo Web';
  protected WebDevProperties:BodyServiceModel = WEB_DESING;
  constructor() { }

  ngOnInit(): void {
  }

}
