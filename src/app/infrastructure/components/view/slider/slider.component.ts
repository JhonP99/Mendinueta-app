import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public images = [
    'https://as1.ftcdn.net/v2/jpg/02/83/46/46/1000_F_283464691_hwArzj9PzTURj2AYpVaCIviRKPKp8T1f.jpg',
    'http://drive.google.com/uc?export=view&id=1y_7W_jg9KYh3krrBTKQgHL2lfSAvkUko',
    'https://as2.ftcdn.net/v2/jpg/02/60/15/47/1000_F_260154760_bpalKx72q1OrHgn2ocM8PEAsPnjECjse.jpg'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
