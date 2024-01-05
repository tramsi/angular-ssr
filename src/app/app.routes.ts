import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageComponent } from './pages/page/page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  { path: ':slug', component: PageComponent },
];
