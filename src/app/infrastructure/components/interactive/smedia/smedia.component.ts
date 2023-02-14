import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smedia',
  templateUrl: './smedia.component.html',
  styleUrls: ['./smedia.component.scss']
})
export class SMediaComponent implements OnInit {
  protected title:string = 'Social Media';

  constructor() { }

  ngOnInit(): void {
  }

}
