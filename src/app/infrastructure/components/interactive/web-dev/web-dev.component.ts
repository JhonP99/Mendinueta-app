import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent implements OnInit {
  protected title:string = 'Desarrollo Web';
  constructor() { }

  ngOnInit(): void {
  }

}
