import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
