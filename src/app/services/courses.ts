import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Courses {

  private courses: string[] = ['Math 101', 'Science 103', 'History 102', 'Art 100'];

  constructor() { }

  getCourses() {
    return this.courses;
  }

}
