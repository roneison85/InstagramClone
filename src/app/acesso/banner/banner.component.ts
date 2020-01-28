import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Imagem } from './imagem.model';

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
      transition('escondido <=> visivel', animate('1s ease-in'))
      //transition('escondido => visivel', animate('1s ease-in')),
      //transition('visivel => escondido', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel';
  public imagens: Imagem[] = [
    { estado: 'visivel', url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' }
  ];

  constructor() { 
    
  }

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 2000);
  }

  public logicaRotacao(): void {
    let indice: number;

    for(let i: number = 0; i <= 4; i++){
      if(this.imagens[i].estado === 'visivel') {
        // oculta a imagem
        this.imagens[i].estado = 'escondido';
        indice = i == 4 ? 0 : i + 1;
        break;
      }
    }
    // exibir a proxima imagem
    this.imagens[indice].estado = 'visivel';
    setTimeout(() => this.logicaRotacao(), 2000);
  }

}