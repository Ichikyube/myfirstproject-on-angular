import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './route/home.component';
import { AboutComponent } from './route/about.component';
import { NewsComponent } from './route/news.component';
import { ContactComponent } from './route/contact.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home',
      }
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: {
        value: 'basics',
      }
    }
  },
  {
    path: 'news',
    component: NewsComponent,
    data: {
      animation: {
        value: 'contained',
      }
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      animation: {
        value: 'advanced',
      }
    }
  },
  {

    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'home',
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
