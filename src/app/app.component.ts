import { Component, OnInit, inject } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-routing';
  router: Router = inject(Router);

  showLoader: boolean = false;

  ngOnInit(): void {
      this.router.events.subscribe((routerEvent: Event)=>{
        if(routerEvent instanceof NavigationStart){
          this.showLoader = true;
        }

        if(routerEvent instanceof NavigationEnd 
          || routerEvent instanceof NavigationCancel 
          || routerEvent instanceof NavigationError){
          this.showLoader = false;
        }
      })
  }
}
