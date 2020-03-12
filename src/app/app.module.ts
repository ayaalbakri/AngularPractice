import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimplebindingComponent } from './simplebinding/simplebinding.component';
import { AppRoutingModule } from './app-routing.module';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './StudentList/StudentList.component';
import { StudentEditComponent } from './StudentEdit/StudentEdit.component';
import { StudentRecordComponent } from './StudentRecord/StudentRecord.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      AppComponent,
      SimplebindingComponent,
      MyComponentComponent,
      StudentListComponent,
      StudentEditComponent,
      StudentRecordComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
