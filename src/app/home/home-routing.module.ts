import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './screens/champions/champions.component';
import { NewsComponent } from './screens/news/news.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { SupportComponent } from './screens/support/support.component';

const routes: Routes = [
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'champions',
        component: ChampionsComponent
    },
    {
        path: 'support',
        component: SupportComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
