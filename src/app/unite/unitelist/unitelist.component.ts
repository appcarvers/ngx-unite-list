import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'ngx-unite-list',
  templateUrl: './unitelist.component.html',
  styleUrls: ['./unitelist.component.css']
})
export class UnitelistComponent implements OnInit {

  _totalPages;
  _filters : Array<any> = [];
  bsConfig: Partial<BsDatepickerConfig>;

  @Input() displayTable = true;
  @Input() tableData;
  @Input() tableHeaders;
  @Input() currentPage: number;
  @Input() searchBox = false;
  @Input() pagesToShow;
  @Input('table-class') tableBlockClass     = 'table';
  @Input('filter-class') filterBlockClass   = 'my-col col-xs-3';
  @Input('searchbox-class') searchBoxClass  = 'my-col col-xs-3';
  @Input() set data(value){
    this.tableData = value;
  };
  // @Input() set totalPages(value){
  //   this._totalPages = Array(value).fill(1); // [0,1,2,3,4]
  // };
  @Input() totalPages;
  @Input() set filters(value){
    this._filters = value; // [0,1,2,3,4]

    this._filters.forEach(element => {
      this.myFilterObj.values[element.name] = element.value;
    });
  };

  @Output() pageChanged = new EventEmitter();
  @Output() filterChanged = new EventEmitter();
  @Output() searchInput = new EventEmitter();

  @ViewChild('tableBody') checkingTableBody;

  myOptions: Array<any>;
  mySelectValue: Array<string>;
  myFilterObj = {values : {}, change : {}};

  constructor() {
  }

  ngOnInit() {
  }

  filterSelected(e, f){

    this.myFilterObj.change = {status : 'selected', name : f, value : e.id, text : e.text};
    this.myFilterObj.values[f] = e.id;

    this.filterChanged.emit(this.myFilterObj);
  }

  filterRemoved(e,f){
    this.myFilterObj.change = {status : 'removed', name : f, value : e.id, text : e.text};
    this.myFilterObj.values[f] = '';

    this.filterChanged.emit(this.myFilterObj);
  }

  checkPageChanged($e){
    this.pageChanged.emit($e);
  }

  dateChanged(e, f){
    if(e)
    {
      this.myFilterObj.change = {status : 'selected', name : f, value : e};
      this.myFilterObj.values[f] = e;
    }
    else
    {
      this.myFilterObj.change = {status : 'removed', name : f, value : ''};
      this.myFilterObj.values[f] = '';
    }

    this.filterChanged.emit(this.myFilterObj);
  }

  searchValueChanged(e){
    let obj = {keyPressed : e.key, searchVal : e.target.value, keyCode : e.which};
    console.log(obj);
    this.searchInput.emit(obj);
  }
}
