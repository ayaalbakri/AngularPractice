import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplebindingComponent } from './simplebinding/simplebinding.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { StudentEditComponent } from './StudentEdit/StudentEdit.component';
import { StudentListComponent } from './StudentList/StudentList.component';

const routes: Routes = [
  { path: 'Simplebinding', component: SimplebindingComponent },
  { path: 'MyComponent', component: MyComponentComponent },
  { path: 'StudentEdit', component: StudentEditComponent },
  { path: 'StudentList', component: StudentListComponent },
  { path: 'StudentEdit/:id', component: StudentEditComponent },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
