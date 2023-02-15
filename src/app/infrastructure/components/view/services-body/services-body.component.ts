import {Component, Input, OnInit} from '@angular/core';
import {BodyServiceModel} from "../../../../application/models/body-service.model";

@Component({
  selector: 'app-services-body',
  templateUrl: './services-body.component.html',
  styleUrls: ['./services-body.component.scss']
})
export class ServicesBodyComponent implements OnInit {
  @Input() properties!:BodyServiceModel;
  //

  constructor() { }

  ngOnInit(): void {
  }

}
