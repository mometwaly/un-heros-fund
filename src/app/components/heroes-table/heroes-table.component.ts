import { Hero } from './../../models/hero.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit {
  @Input() heroes : Hero [] =[]
  constructor() { }

  ngOnInit(): void {
    //console.log(this.heroes)
  }

}
