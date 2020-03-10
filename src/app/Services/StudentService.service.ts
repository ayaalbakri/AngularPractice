import { Injectable } from '@angular/core';
import { StudentModel } from '../models/StudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  students :StudentModel[] = [
    { Id: 11, StudentName: 'Aya',Age:20,Active:true,Gender:'female' },
    { Id: 12, StudentName: 'Narco' ,Age:22,Active:true,Gender:'Male' },
    { Id: 13, StudentName: 'Hatem',Age:10,Active:true,Gender:'Male' },
    { Id: 14, StudentName: 'Celeritas',Age:22,Active:true,Gender:'Male' },
    { Id: 15, StudentName: 'Magneta' ,Age:22,Active:true,Gender:'Male'},
    { Id: 16, StudentName: 'RubberMan',Age:22,Active:true,Gender:'Male' },
    { Id: 17, StudentName: 'Dynama',Age:22,Active:true,Gender:'Male' },
    { Id: 18, StudentName: 'Osama' ,Age:7,Active:true,Gender:'Male'},
    { Id: 19, StudentName: 'Magma',Age:22,Active:true,Gender:'Male' },
    { Id: 20, StudentName: 'Tornado',Age:22,Active:true,Gender:'Male' }
  ];
constructor() { }
getstudents (): StudentModel[] {
  return this.students;
}
}
