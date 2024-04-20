import { Component, inject } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../Models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
}
