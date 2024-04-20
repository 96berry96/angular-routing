import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },
  {
    path:'Home', component:HomeComponent,
  },
  {
    path:'About', component: AboutComponent
  },
  {
    path:'Contact', component: ContactComponent
  },
  {
    path:'Courses', component:CoursesComponent
  },
  {
    path:'Courses/Course/:id', component:CourseDetailComponent
  },
  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
