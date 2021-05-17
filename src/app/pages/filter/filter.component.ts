import { Hero } from './../../models/hero.interface';
import { FilterService } from './../../services/filter.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  countries: any[] = [];
  heroes: Hero[] = [];
  filter : any={
    Email : '',
    Name : '',
    Company : '',
    Country : '',
    Phone : '',
    Date : ''
    
  };
  hideMenu = false
  constructor(
    private filterService: FilterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.filterService.getCountries().subscribe((res) => {
      /*let temp: [any] = res.Response;
      temp.map((el) => {
        return el.Name ;
      });*/

      this.countries = res.Response;
    });
    let params = this.route.snapshot.queryParams;
    console.log(params);
    if (Object.keys(params).length !== 0) {
      this.heroes = this.filterService.filterHeros(params);
      this.filter=params
    } else {
      this.heroes = this.filterService.getHeros();
      
    }
  }
  parentSubmit(data: any) {
    for(let key in data){
      if(! data[key]){
        delete data[key]
      }
    }
    if(Object.keys(data).length !== 0){
    this.router.navigate(['/heroes'], { queryParams: data });
    this.heroes = this.filterService.filterHeros(data);
    }
  }
  toggleMenu(){
    this.hideMenu=!this.hideMenu
  }
}
