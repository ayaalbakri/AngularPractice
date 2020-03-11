import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StudentModel } from '../models/StudentModel';

@Component({
  selector: 'app-StudentRecord',
  templateUrl: './StudentRecord.component.html',
  styleUrls: ['./StudentRecord.component.css']
})
export class StudentRecordComponent implements OnInit {
  @Input() student: StudentModel; 
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEditClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  onEditClicked(id) { // You can give any function name
    this.onEditClick.emit(id);
}

}
