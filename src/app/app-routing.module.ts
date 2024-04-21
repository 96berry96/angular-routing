import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGauardServiceService } from './services/auth-gauard-service.service';
import { CanActivate, CanActivateChild, canDeactivate, resolve } from './auth.guard';

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
    path:'Contact', 
    canDeactivate:[canDeactivate],
    component: ContactComponent
  },
  {
    path:'Courses', 
    resolve:{ courses: resolve},
    component:CoursesComponent
  },
  {
    path:'Courses', 
    canActivateChild: [CanActivateChild],
    children:[
       { path: 'Course/:id', component:CourseDetailComponent },
       { path:'Popular', component:PopularComponent  },
       { 
        path:'Checkout', 
        component:CheckoutComponent, 
      }
    ]
  },
  {
    path:'Login', component:LoginComponent
  },
  {
    path:'**', component:NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
