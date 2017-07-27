// Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// Components
import { AppComponent }  from './app.component';
import { HeroesComponent } from "./heroes.component"
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from "./header.component";
import { AltHeaderComponent } from "./alt-header.component";
import { FooterComponent } from "./footer.component";
// Services
import { HeroService } from "./hero.service"
// Router
import { RoutingModule }  from './routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeaderComponent,
    AltHeaderComponent,
    FooterComponent
  ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


