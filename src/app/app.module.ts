import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { UniteModule } from '@appcarvers/ngx-unitelist/unite.module';
import { UniteModule } from './unite/unite.module';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UniteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
