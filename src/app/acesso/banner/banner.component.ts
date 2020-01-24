import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      transition('escondido <=> visivel', animate('1s ease-in')),
      //transition('escondido => visivel', animate('1s ease-in')),
      //transition('visivel => escondido', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel';

  constructor() { }

  ngOnInit() {
  }

  toggleAnimation() {
    this.estado = this.estado === 'escondido' ? 'visivel' : 'escondido';
  }

}
