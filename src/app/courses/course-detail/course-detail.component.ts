import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Course } from '../../Models/course';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit, OnDestroy{
  selectedCourse: Course;
  courseId: number;
  paramMapObs;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
      //this.courseId = this.activeRoute.snapshot.params['id'];
      //this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
      // this.activeRoute.params.subscribe((data)=>{
      //   this.courseId = Number(data['id'])
      //   this.selectedCourse = this.courseService.courses.find(c => c.id === this.courseId);
      // })
      this.paramMapObs = this.activeRoute.paramMap.subscribe((data)=>{
        this.courseId = Number(data.get('id'))
        this.selectedCourse = this.courseService.courses.find(c => c.id === this.courseId);
      })
  }

  ngOnDestroy(): void {
      this.paramMapObs.unsubscribe();
  }
}
