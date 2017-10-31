import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-unite-sort',
  templateUrl: './unitesort.component.html',
  styleUrls: ['./unitesort.component.css']
})
export class UnitesortComponent implements OnInit {

  @Input() sortCoverClass;
  @Input() sortDataArray : Array<any>;
  @Output() sortChanged = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sortValueClicked(clickedName)
  {
    var emitObject = {};

    this.sortDataArray.forEach(element => {
      if(element.name === clickedName)
      {
        element['value'] = element['value'] === 'asc' ? 'desc' : 'asc';
        emitObject[element.name] = element.value;
        this.sortChanged.emit(emitObject);
      }
      else
      {
        delete element['value'];
      }
    });
  }

}
