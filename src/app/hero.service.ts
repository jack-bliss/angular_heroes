import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './classes/hero';


@Injectable()

export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: Http
  ){

  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  handleError(e: any): Promise<any> {
      console.error("Couldn't get heroes: ", e);
      return Promise.reject(e.message || e);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => {
       return heroes.find(hero => hero.id === id);
    });
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

}
