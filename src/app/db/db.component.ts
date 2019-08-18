import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DbComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,4))
  }

}
