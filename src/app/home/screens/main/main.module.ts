import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ChampionDetailComponent } from './components/champions/champion-detail/champion-detail.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { CreditComponent } from './components/credit/credit.component';

@NgModule({
  declarations: [
    MainComponent,
    ChampionsComponent,
    WelcomeComponent,
    ChampionDetailComponent,
    TrailerComponent,
    CreditComponent
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  exports: [],
})
export class MainModule {}
