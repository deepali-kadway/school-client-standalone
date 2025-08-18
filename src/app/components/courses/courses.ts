import { Component } from '@angular/core';
import { Courses as CoursesService } from '../../services/courses';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {

  courses: string[];

constructor(service: CoursesService) {
  //initialize courses from the service
  this.courses = service.getCourses();
}
}
