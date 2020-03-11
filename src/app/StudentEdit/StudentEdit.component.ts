import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../Services/StudentService.service';
import { StudentModel } from '../models/StudentModel';

@Component({
  selector: 'app-StudentEdit',
  templateUrl: './StudentEdit.component.html',
  styleUrls: ['./StudentEdit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: number;
  student: any;

  constructor(private router: ActivatedRoute,private route:Router,private studentService:StudentServiceService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params['id']) {
          this.id = +params['id'];
          this.student = this.studentService.getStudentById(this.id);
}
}
);

  }
  backtoList(){
this.route.navigate(['StudentList']);
  }
}
