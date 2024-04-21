import { inject } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { CourseService } from "./services/course.service";

export const CanActivate = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isAuthenticated()){
    return true;
  } else {
    router.navigate(['/Login']);
    return false;
  }
}

export const CanActivateChild = () => {
  return CanActivate();
}

export const canDeactivate = (comp) => {
  return comp.canExit();
}

export const resolve = () => {
  const courseService = inject(CourseService);
  return courseService.getAllcourses();
}