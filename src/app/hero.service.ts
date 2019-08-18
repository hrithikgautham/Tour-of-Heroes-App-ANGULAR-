import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageSevice: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageSevice.add('Heroes Fetched!');
    return of(HEROES);
  } 

  getHero(id: number): Observable<Hero> {
    this.messageSevice.add(`Hero with id: ${id} Fetched!`);
    return of(HEROES.filter(hero => hero.id === id)[0]);
  }
}
