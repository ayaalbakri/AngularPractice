import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/StudentService.service';
import { StudentModel } from '../models/StudentModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-StudentList',
  templateUrl: './StudentList.component.html',
  styleUrls: ['./StudentList.component.css']
})
export class StudentListComponent implements OnInit {
  students : StudentModel[];
  selectedStudent: StudentModel;

  constructor(private svc: StudentServiceService,private router: Router) {
    this.students = svc.getstudents();
   }
  ngOnInit() {
    console.log(this.students)
  }
  onEditClick(id) {
    this.router.navigate(['/StudentEdit/' + id]);
    console.log(id,"idddddd");
}


}
