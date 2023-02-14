import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-services-title',
  templateUrl: './services-title.component.html',
  styleUrls: ['./services-title.component.scss']
})
export class ServicesTitleComponent implements OnInit {
  @Input() title!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
