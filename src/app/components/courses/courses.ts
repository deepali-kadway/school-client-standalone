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
}