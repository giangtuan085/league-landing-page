import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { ChampionCardComponent } from './components/champions/champion-card/champion-card.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    ChampionCardComponent,
    ChampionsComponent,
    WelcomeComponent,
    ChampionDetailComponent
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  exports: [],
})
export class MainModule {}
