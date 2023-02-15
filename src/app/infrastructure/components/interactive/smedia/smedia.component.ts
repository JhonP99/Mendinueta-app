import { Component, OnInit } from '@angular/core';
import {BodyServiceModel} from "../../../../application/models/body-service.model";
import {SOCIAL_MEDIA} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-smedia',
  templateUrl: './smedia.component.html',
  styleUrls: ['./smedia.component.scss']
})
export class SMediaComponent implements OnInit {
  protected title:string = 'Social Media';
  protected SMedia:BodyServiceModel = SOCIAL_MEDIA;

  constructor() { }

  ngOnInit(): void {
  }

}
