import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-desing',
  templateUrl: './brand-desing.component.html',
  styleUrls: ['./brand-desing.component.scss']
})
export class BrandDesingComponent implements OnInit {
  protected title:string = 'Diseño de marca';

  constructor() { }

  ngOnInit(): void {
  }

}
