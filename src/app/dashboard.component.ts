import { Component, OnInit }    from '@angular/core';
import { Hero }                 from './classes/hero';
import { HeroService }          from './hero.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./styles/dashboard.component.css'],
  templateUrl: './templates/dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  heroes: Hero[] = [];

  constructor(private heroSerivce: HeroService){

  }

  ngOnInit(){
    this.heroSerivce.getHeroes().then(heroes => this.heroes = heroes.slice(0, 4));
  }
}
