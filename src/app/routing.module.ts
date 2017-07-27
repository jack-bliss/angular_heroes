import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeaderComponent }      from './header.component';
import { AltHeaderComponent }   from './alt-header.component';
import { FooterComponent }      from './footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  children:
    [
      { path: '', component: DashboardComponent,    pathMatch: 'full' },
      { path: '', component: HeaderComponent,       pathMatch: 'full', outlet: 'header' },

      { path: 'alternate', children:
        [
          { path: '', component: HeroesComponent,    pathMatch: 'full' },
          { path: '', component: FooterComponent,    pathMatch: 'full', outlet: 'header' }
        ]
      }

    ]
  },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     children:
    [
      { path: '', component: HeroesComponent,       pathMatch: 'full' },
      { path: '', component: AltHeaderComponent,    pathMatch: 'full', outlet: 'header' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
