import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { NewsComponent } from './screens/news/news.component';
import { ChampionsComponent } from './screens/main/parts/champions/champions.component';
import { SupportComponent } from './screens/support/support.component';
import { MainComponent } from './screens/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './screens/main/parts/welcome/welcome.component';
import { ChampionCardComponent } from './screens/main/parts/champions/champion-card/champion-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    OverviewComponent,
    NewsComponent,
    ChampionsComponent,
    SupportComponent,
    MainComponent,
    WelcomeComponent,
    ChampionCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
