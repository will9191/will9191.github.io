import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = [
    {
      img: "assets/education/etec.jpg",
      name: "ETEC Comendador João Rays",
      description: "This is where I completed high school and was introduced to the fundamentals of software development. It was here that my passion for technology and problem-solving first took shape."
    },
    {
      img: "assets/education/unisagrado.webp",
      name: "USC - University of the Sacred Heart",
      description: "Currently pursuing a degree in Computer Science at USC, I am refining my skills and expanding my knowledge in software development. This journey allows me to explore advanced concepts and gain hands-on experience in building real-world applications."
    }
  ]
}
