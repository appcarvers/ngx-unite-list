import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { displayRowPipe } from './display.row';
import { UnitelistComponent } from './unitelist/unitelist.component';
import { UnitepaginationComponent } from './unitepagination/unitepagination.component';

import { SelectModule } from 'ng2-select';
import { BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SelectModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    UnitelistComponent,
    displayRowPipe,
    UnitepaginationComponent
  ],
  exports:[
    UnitelistComponent,
    UnitepaginationComponent
  ]
})
export class UniteModule { }
