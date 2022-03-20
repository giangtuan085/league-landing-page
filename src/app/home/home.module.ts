import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { NewsComponent } from './screens/news/news.component';
import { ChampionsComponent } from './screens/champions/champions.component';
import { SupportComponent } from './screens/support/support.component';



@NgModule({
  declarations: [HomeComponent, HeaderComponent, OverviewComponent, NewsComponent, ChampionsComponent, SupportComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
