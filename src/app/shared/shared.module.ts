import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { SectionComponent } from './components/section/section.component';
import { SectionContentComponent } from './components/section-content/section-content.component';
import { MButtonComponent } from './components/m-button/m-button.component';
import { CommonModule } from '@angular/common';
import { ChampionCardComponent } from './components/champion-card/champion-card.component';


@NgModule({
  declarations: [
    HomeSectionComponent,
    SectionComponent,
    SectionContentComponent,
    MButtonComponent,
    ChampionCardComponent,
  ],
  imports: [SwiperModule, CommonModule],
  exports: [
    SwiperModule,
    SectionComponent,
    HomeSectionComponent,
    MButtonComponent,
  ]
})
export class SharedModule { }
