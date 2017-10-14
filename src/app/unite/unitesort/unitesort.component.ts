import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-unite-unitesort',
  templateUrl: './unitesort.component.html',
  styleUrls: ['./unitesort.component.css']
})
export class UnitesortComponent implements OnInit {

  _fakeSortArray;
  @Input() sortCoverClass;

  constructor() {
    this._fakeSortArray = [
                            {name : 'sort-1', label : 'Sort 1', value : 'asc'},
                            {name : 'sort-2', label : 'Sort 2'},
                            {name : 'sort-3', label : 'Sort 3'},
                            {name : 'sort-4', label : 'Sort 4'},
                          ];
  }

  ngOnInit() {
  }

}
