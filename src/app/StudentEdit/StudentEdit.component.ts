import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../Services/StudentService.service';
import { StudentModel } from '../models/StudentModel';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-StudentEdit',
  templateUrl: './StudentEdit.component.html',
  styleUrls: ['./StudentEdit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: number;
  student: StudentModel;
  Form: FormGroup;
  constructor(private router: ActivatedRoute,
    private route: Router, private studentService: StudentServiceService,
    private fb: FormBuilder) {
      this.Form = fb.group({
        StudentName: ['', Validators.required],
        Age: [0, Validators.required],
        Gender: [''],
        Active: ['']

      })

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        this.student = this.studentService.getStudentById(this.id);
        console.log(this.student,"this.student")
        this.SetFormValue();
       
      }
    }
    );

  }
  backtoList() {
    this.route.navigate(['StudentList']);
  }
  SetFormValue() {
      this.Form.setValue({
        StudentName: this.student?this.student.StudentName:"",
       Age:this.student?this.student.Age:0,
       Gender:this.student?this.student.Gender:"",
       Active: this.student?this.student.Gender:""

      });
  }
  public onSubmit({ value, valid }: { value: StudentModel, valid: boolean }): void {

    if (!valid) {
        return;
    }
    if (this.student !== undefined) {         
      console.log(this.student,"student")   
        console.log(value,"exist user")
    }
    else {
      console.log(value,"new user")
        // this.svc.Add(value);
    }
}

}
