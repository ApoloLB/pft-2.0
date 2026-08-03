import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  currentAngle = 0;

  nextProject() {
    this.currentAngle -= 90;
  }
  prevProject() {
    this.currentAngle += 90;
  }

}
