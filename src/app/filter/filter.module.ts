import { PhonePipe } from './../phone.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from '../pages/filter/filter.component';
import { FilterFormComponent } from '../components/filter-form/filter-form.component';
import { FormsModule } from '@angular/forms';
import { HeroesTableComponent } from '../components/heroes-table/heroes-table.component';


@NgModule({
  declarations: [
    FilterComponent,
    FilterFormComponent,
    HeroesTableComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    FormsModule
  ]
})
export class FilterModule { }
