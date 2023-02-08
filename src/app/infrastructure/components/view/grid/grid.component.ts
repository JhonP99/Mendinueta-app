import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  urls:string[] = [
    "https://static.wixstatic.com/media/1c35ce_9f1a23aa9d5c4ae1904db6bdae3f694c~mv2.jpg/v1/fill/w_206,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c35ce_9f1a23aa9d5c4ae1904db6bdae3f694c~mv2.jpg",
    "https://static.wixstatic.com/media/1c35ce_2f3641a4f94049f2b046c63ddc3a4d84~mv2.jpg/v1/fill/w_617,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c35ce_2f3641a4f94049f2b046c63ddc3a4d84~mv2.jpg",
    "https://static.wixstatic.com/media/1c35ce_81a3585e86924ff79f7a266321037f26~mv2.jpg/v1/fill/w_206,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c35ce_81a3585e86924ff79f7a266321037f26~mv2.jpg",
    "https://static.wixstatic.com/media/1c35ce_64cdcc3f46ed49a782c36dda9f6e31a3~mv2.jpg/v1/fill/w_256,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c35ce_64cdcc3f46ed49a782c36dda9f6e31a3~mv2.jpg",
    "https://static.wixstatic.com/media/1c35ce_f7d72294babd44679558bf51115e927d~mv2.jpg/v1/fill/w_387,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c35ce_f7d72294babd44679558bf51115e927d~mv2.jpg",
    "https://static.wixstatic.com/media/1c35ce_76614fef44824ac39f615a2c097773b0~mv2.jpg/v1/fill/w_387,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c35ce_76614fef44824ac39f615a2c097773b0~mv2.jpg"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
