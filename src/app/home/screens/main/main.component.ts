import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, Mousewheel, EffectFade, SwiperOptions, Autoplay } from 'swiper';

SwiperCore.use([Mousewheel, EffectFade, Pagination, Autoplay]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({height: 0}),
        animate(1500, style({height: '100%'}))
      ]),
      transition('* => void', [
        animate(1000, style({height: 0}))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  swiperOptions: SwiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    // pagination: {
    //   clickable: true
    // },
    effect: 'slide',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any): void {
    console.log(swiper);
  }
  onSlideChange(): void {
  }

}
