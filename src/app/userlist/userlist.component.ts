import { Component, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers : [FakedataService]
})
export class UserlistComponent implements OnInit {

  usersData;
  usersHeaders;
  userTotalPages;
  userCurrentPage;
  userFilters = [];
  userSortArray;

  constructor(private _fService : FakedataService) { }

  ngOnInit() {
    this.userSortArray = [
                            {name : 'sort-1', label : 'Sort 1 new'},
                            {name : 'sort-2', label : 'Sort 2 new'},
                            {name : 'sort-3', label : 'Sort 3 new'},
                            {name : 'sort-4', label : 'Sort 4 new'},
                          ];
    this.usersHeaders = [
                            {label : "Id", identifier : ['id']},
                            {label : "Name", identifierCombo : [['first_name'],['last_name']]},
                            {label : "Avatar", identifier : ['avatar'], displayType : 'image'}
                        ];

    this.userFilters =  [
                          {
                            label     : 'Filter 1',
                            name  : 'filter-1',
                            options   : [{id: 'a', text: 'Alpha'},{id: 'b', text: 'Beta'},{id: 'c', text: 'Gamma'},]
                          },
                          {
                            label : 'Filter 2',
                            name : 'filter-2',
                            options : [{id: 'a', text: 'xyz'},{id: 'b', text: 'abc'},{id: 'c', text: 'syz'},]
                          },
                          {
                            label: 'Date',
                            type: 'date',
                            name: 'filter-4'
                          }
                        ];

    this.loadUsers();
  }

  checkSearchVal($e){
      console.log('search update ', $e);
  }

  loadUsers(pageNo? : number){
    this._fService.getUsers(pageNo).subscribe(usersData => {
      this.usersData      = usersData['data'];
      this.userTotalPages = usersData['total_pages'];
      this.userCurrentPage = usersData['page'];
      console.log(usersData);
    });
  }

  checkPageChanged(e){
    if(typeof e.newPage === 'number')
    {
      this.loadUsers(e.newPage);
    }
  }

  updateSort(e){
    console.log("change event ", e);
  }

  checkFilterChanged(e){
    console.log('filter changed event captuire ', e);
  }
}
