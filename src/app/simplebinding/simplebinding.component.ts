import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../Services/StudentService.service';
import { StudentModel } from '../models/StudentModel';

@Component({
  selector: 'app-simplebinding',
  templateUrl: './simplebinding.component.html',
  styleUrls: ['./simplebinding.component.css']
})
export class SimplebindingComponent implements OnInit {
  name: string = 'Anas';
  students : StudentModel[];
  constructor(private svc:StudentServiceService) {
    this.students = svc.getstudents();
  }
  ngOnInit() {
    console.log(this.students);
  }
}
