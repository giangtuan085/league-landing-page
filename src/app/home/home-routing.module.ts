import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './screens/news/news.component';
import { OverviewComponent } from './screens/overview/overview.component';
import { SupportComponent } from './screens/support/support.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('src/app/home/screens/main/main.module').then(m => m.MainModule)
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: 'news',
        component: NewsComponent
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
