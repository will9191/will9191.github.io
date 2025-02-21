import { Component } from '@angular/core';
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
