import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CommunityGarden';
  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
