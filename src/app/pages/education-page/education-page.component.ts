import { Component } from '@angular/core';
import { EducationComponent } from "../../components/education/education.component";

@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [EducationComponent],
  templateUrl: './education-page.component.html',
  styleUrl: './education-page.component.scss'
})
export class EducationPageComponent {

}
