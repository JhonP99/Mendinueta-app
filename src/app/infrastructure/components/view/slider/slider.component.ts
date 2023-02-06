import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public images = [
    'https://static.wixstatic.com/media/1c35ce_36e1462c6a8049a5a3998b02a9ae0d63~mv2.jpg/v1/fill/w_617,h_383,al_c,q_80,usm_0.66_1.00_0.01/1c35ce_36e1462c6a8049a5a3998b02a9ae0d63~mv2.jpg',
    'https://static.wixstatic.com/media/1c35ce_8de87d0cfad14f74b2c0d2cb17b0af38~mv2.jpg/v1/fill/w_617,h_383,al_c,q_80,usm_0.66_1.00_0.01/1c35ce_8de87d0cfad14f74b2c0d2cb17b0af38~mv2.jpg',
    'https://static.wixstatic.com/media/1c35ce_b803c3428f834953bb6f0a75a27d7c32~mv2.jpg/v1/fill/w_617,h_383,al_c,q_80,usm_0.66_1.00_0.01/1c35ce_b803c3428f834953bb6f0a75a27d7c32~mv2.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
