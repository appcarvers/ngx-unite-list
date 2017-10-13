import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-unite-pagination',
  templateUrl: './unitepagination.component.html',
  styleUrls: ['./unitepagination.component.css']
})
export class UnitepaginationComponent implements OnInit {

  _totalPages;
  _totalPageCount;
  startPage;
  endPage;
  endPointStart;
  endPointEnd;

  @Input() currentPage: number;
  @Input() set totalPages(value){
    this._totalPageCount = value;
    this._totalPages = Array(value).fill(1); // [0,1,2,3,4]
    this.checkingFuntion();
  };

  @Output() pageChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChange(newPage){
    var thisNewPage = newPage;

    if(typeof newPage === 'number')
    {
      // just because the pagination value starts from 0 and not 1 :D
      thisNewPage++;
    }
    else
    {
      switch(newPage){
        case 'first':
              thisNewPage = 1;
            break;
        case 'prev' :
              if (this.currentPage !== 1)
              {
                thisNewPage = this.currentPage -1;
              }
            break;
        case 'nxt' :
              if (this.currentPage !== this._totalPageCount)
              {
                thisNewPage = this.currentPage + 1;
              }
            break;
        case 'last' :
              thisNewPage = this._totalPageCount;
            break;
      }
    }

    if(thisNewPage != this.currentPage)
    {
      var obj = { currentPage : this.currentPage, newPage : thisNewPage };
      this.pageChanged.emit(obj);
    }

    this.currentPage = thisNewPage;
    this.checkingFuntion();
  }

  checkingFuntion()
  {
    if (this._totalPageCount <= 10)
    {
        // less than 10 total pages so show all
        this.startPage = 1;
        this.endPage = this._totalPageCount;
    }
    else
    {
        // more than 10 total pages so calculate start and end pages
        if (this.currentPage <= 6) {
            this.startPage = 1 - 1;
            this.endPage = 10 - 1;
        } else if (this.currentPage + 4 >= this._totalPageCount) {
            this.startPage = this._totalPageCount - 9 - 1 ;
            this.endPage = this._totalPageCount - 1;
        } else {
            this.startPage = this.currentPage - 5 - 1;
            this.endPage = this.currentPage + 4 - 1;
        }
    }

    this.endPointStart  = this.startPage - 1;
    this.endPointEnd    = this.endPage + 1;
    console.log("startpage " + this.startPage + " --- endpage" + this.endPage);
  }

}
