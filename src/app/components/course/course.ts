import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

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
export class Course implements OnChanges, OnInit, DoCheck, OnDestroy{
  @Input() course: ICourse | undefined;

  // life cycle hooks?
  // 1. constructor function runs first when a component is created.
  constructor() {
    console.log('Course Constructor');
  }

  // 2. ngOnChanges runs when @Input property changes from undefined to course
  ngOnChanges(changes: SimpleChanges): void {
  console.log('Course ngOnChanges', changes);
  }

  // 3. ngOnInit runs only once after ngOnChanges: used to initialize components properties
  ngOnInit(): void {
    console.log('Course ngOnInit');
  }

  // 4. ngDoCheck runs after ngOninit: used to detect and act upon changes that Angular does not detect on it's own.
  ngDoCheck(): void {
    console.log('Course ngDoCheck');
  }

  //5. ngOndestroy runs when we navigate away from the component or when the component is destroyed.
  ngOnDestroy(): void {
    console.log('Course ngOnDestroy');
  }
}