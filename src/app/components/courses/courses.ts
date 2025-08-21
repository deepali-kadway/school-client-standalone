import { Component, OnInit } from '@angular/core';
import { Courses as CourseService } from '../../services/courses';
import { Course } from '../course/course';
import { ICourse } from '../../interfaces/icourse';

@Component({
  selector: 'app-courses',
  imports: [Course],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit{
 // ! lets typescript know that this property will be initialized later. The value will be provided to this variable later in ngOnInit.
  courses!: ICourse[];
 

  // Dependency Injection
  constructor(private service: CourseService) {}

  ngOnInit(): void {
  this.courses = this.service.getCourses();
  }

//   text:any;
//   alertMessage(message: any){
// this.text=message;
//   }

   deleteCourse(id: number) {
    // find the index of course with given id
    let index = this.courses.findIndex((course) => course.id === id);
    // index of -1 returns when no matching record is found
    if (index === -1) {
      return; // exits function at this line
    }

    // found the course, remove it from our array
    this.courses.splice(index, 1);
  }
}