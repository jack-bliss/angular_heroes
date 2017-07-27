import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './classes/hero.';

import { HeroService} from "./hero.service";

@Component({
  selector: 'my-heroes',
  styleUrls: ['./styles/heroes.component.css'],
  templateUrl: './templates/heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {
    // constructor
  }

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero){
    this.router.navigate(['/detail', hero.id]);
  }

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }
}
