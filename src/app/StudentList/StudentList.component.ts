import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/StudentService.service';
import { StudentModel } from '../models/StudentModel';

@Component({
  selector: 'app-StudentList',
  templateUrl: './StudentList.component.html',
  styleUrls: ['./StudentList.component.css']
})
export class StudentListComponent implements OnInit {
  students : StudentModel[];

  constructor(private svc: StudentServiceService) {
    this.students = svc.getstudents();
   }
  ngOnInit() {
    console.log(this.students)
  }

}
