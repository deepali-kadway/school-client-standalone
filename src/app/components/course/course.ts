import { Component, Input } from '@angular/core';

// Define the interface locally for now
interface ICourse {
  id: number;
  name: string;
  level: number;
}

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  @Input() course: ICourse | undefined;
}