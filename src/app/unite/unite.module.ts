import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { displayRowPipe } from './display.row';
import { UnitelistComponent } from './unitelist/unitelist.component';
import { UnitepaginationComponent } from './unitepagination/unitepagination.component';

import { SelectModule } from 'ng2-select';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { UnitesortComponent } from './unitesort/unitesort.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SelectModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    displayRowPipe,
    UnitelistComponent,
    UnitesortComponent,
    UnitepaginationComponent
  ],
  exports:[
    UnitesortComponent,
    UnitelistComponent,
    UnitepaginationComponent
  ]
})
export class UniteModule { }
