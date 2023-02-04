import {Component, Input, OnInit} from '@angular/core';
import {SliderModel} from "../../../../application/models/slider.model";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  /**
   * Custom properties
   */
  @Input() height = 500;
  @Input() isFullScream = false;
  @Input() items: SliderModel[] = [];

  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;
  constructor() {
    this.finalHeight = this.isFullScream ? '100hv' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map( (item, index) => {
      item.id = index;
      item.marginLeft = 0;
    });
  }

  setCurrentPosition(position:number) {
    this.currentPosition = position;
    this.setMargin(this.items, position);
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    }else {
      nextPosition = 0;
    }
    this.setMargin(this.items, finalPercentage);
    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition -1;
    if (backPosition >= 0) {
      finalPercentage = -100 + backPosition;
    } else {
      backPosition = this.items.length -1;
      finalPercentage = -100 * backPosition;
    }
    this.setMargin(this.items, finalPercentage);
    this.currentPosition = backPosition;

  }

  setMargin(array:SliderModel[], position:any){
    array.map((item) =>{
      if (item.id === 0){
        item.marginLeft = position;
      }
    });
  }
}
