import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { displayRowPipe } from './display.row';
import { UnitelistComponent } from './unitelist/unitelist.component';

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
    displayRowPipe
  ],
  exports:[
    UnitelistComponent
  ]
})
export class UniteModule { }
