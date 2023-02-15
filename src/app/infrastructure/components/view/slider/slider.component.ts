import {Component, Input, OnInit} from '@angular/core';
import {SliderLogoModel} from "../../../../application/models/slider-logo.model";
import {SLIDER_LOGO} from "../../../../domain/constants/constants";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  logos:SliderLogoModel[] = SLIDER_LOGO;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  ngOnInit(): void {

  }

}
