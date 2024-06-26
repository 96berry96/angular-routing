import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../Models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[];
  searchString: string;

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
      //this.searchString = this.activeRoute.snapshot.queryParams['search'];
      //this.searchString = this.activeRoute.snapshot.queryParamMap.get('search');
      this.activeRoute.queryParamMap.subscribe((data)=>{
        this.searchString = data.get('search');

        if(this.searchString === undefined || this.searchString === '' || this.searchString === null) {
          // this.coursesService.getAllcourses().subscribe((data: Course[])=>{
          //   this.AllCourses = data;
          // });
          this.AllCourses = this.activeRoute.snapshot.data['courses'];
        } else {
          this.AllCourses = this.coursesService.courses.filter(c => c.title.toLowerCase().includes(this.searchString.toLowerCase()));
        }
      })     
  }
}
