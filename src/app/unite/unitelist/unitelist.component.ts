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
  _showSearchRemove = false;
  bsConfig: Partial<BsDatepickerConfig>;
  searchVal;

  @Input() displayTable = true;
  @Input() tableData;
  @Input() tableHeaders;
  @Input() currentPage: number;
  @Input() searchBox = false;
  @Input() showSearchButtons = true;
  @Input() pagesToShow;
  @Input('table-class') tableBlockClass     = 'table';
  @Input('filter-class') filterBlockClass   = 'my-col col-xs-3';
  @Input('searchbox-class') searchBoxClass  = 'my-col col-xs-3';
  @Input() totalPages;
  @Input() set data(value){
    this.tableData = value;
  };
  @Input() set filters(value){
    this._filters = value;

    // [0,1,2,3,4]
    this._filters.forEach(element => {
      this.myFilterObj.values[element.name] = element.value;
    });
  };

  @Output() pageChanged = new EventEmitter();
  @Output() filterChanged = new EventEmitter();
  @Output() searchInput = new EventEmitter();
  @Output() searchButtonsClicked = new EventEmitter();

  @ViewChild('tableBody') checkingTableBody;

  myOptions: Array<any>;
  mySelectValue: Array<string>;
  myFilterObj = {values : {}, change : {}};

  constructor() {
  }

  ngOnInit() {
  }

  filterSelected(e, f, i){
    this.myFilterObj.change = {status : 'selected', name : f, value : e.id, text : e.text};
    this.myFilterObj.values[f] = e.id;

    this.filterChanged.emit(this.myFilterObj);
  }

  filterRemoved(e, f, i){
    this.myFilterObj.change = {status : 'removed', name : f, value : e.id, text : e.text};
    this.myFilterObj.values[f] = '';

    this.filterChanged.emit(this.myFilterObj);
  }

  checkPageChanged($e){
    this.pageChanged.emit($e);
  }

  dateChanged(e, f, i){
    if(e)
    {
      this._filters[i].value = e;
      this.myFilterObj.change = {status : 'selected', name : f, value : e};
      this.myFilterObj.values[f] = e;
    }
    else
    {
      this._filters[i].value = '';
      this.myFilterObj.change = {status : 'removed', name : f, value : ''};
      this.myFilterObj.values[f] = '';
    }

    this.filterChanged.emit(this.myFilterObj);
  }

  searchValueChanged(e){
    let obj = {keyPressed : e.key, searchVal : e.target.value, keyCode : e.which};
    this.searchInput.emit(obj);
  }

  searchButtonClicked($e?)
  {
    if(this.searchVal)
    {
      this.searchButtonsClicked.emit(this.searchVal);
    }
    else if($e && $e.key == 'Backspace')
    {
      this.searchButtonsClicked.emit(this.searchVal);
    }
  }

  searchCancle()
  {
    this.searchVal = '';
    this.searchButtonsClicked.emit('');
  }

  clearDate(fieldName, index){
    this._filters[index].value = '';
    this.myFilterObj.change = {status : 'removed', name : fieldName, value : ''};
    this.myFilterObj.values[fieldName] = '';
  }
}
