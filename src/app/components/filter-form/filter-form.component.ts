import { Hero } from './../../models/hero.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  @Input() countries : any[]=[];
  @Input() filter:any;
  @Output () submitForm = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    this.submitForm.emit(form.value)
  }
}
