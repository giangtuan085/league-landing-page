import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { SectionComponent } from './components/section/section.component';
import { SectionContentComponent } from './components/section-content/section-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { MButtonComponent } from './components/m-button/m-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeSectionComponent,
    SectionComponent,
    SectionContentComponent,
    MButtonComponent
  ],
  imports: [SwiperModule, BrowserModule, BrowserAnimationsModule],
  exports: [
    SwiperModule,
    SectionComponent,
    HomeSectionComponent,
    BrowserModule,
    MButtonComponent,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
