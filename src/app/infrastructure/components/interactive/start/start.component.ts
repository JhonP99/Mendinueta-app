import { Component, OnInit } from '@angular/core';
import {SLIDER_DATA_ITEMS} from "../../../../domain/utils/constants/constants";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public sliderData = SLIDER_DATA_ITEMS;

  constructor() { }

  ngOnInit(): void {
    console.log("si estoy iniciando")
  }

}
