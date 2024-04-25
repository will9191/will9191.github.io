import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  developmentImg = 'assets/skills/softwareDevelopment.png';
  designBg = 'assets/skills/design.png';
  learningBg = 'assets/skills/learning.jpeg'

  skills = [
    {
      title: 'Design',
      desc: 'Using tools like Figma, Photoshop and Illustrator, I can create prototypes for projects to have the better visual experience!',
      titleBg: this.designBg,
      
    },
    {
      title: 'Software Development',
      desc: 'My principal skill is to develop apps looking for the best business logic, security, user experience, and responsive interface!',
      titleBg: this.developmentImg,
      
    },
    {
      title: 'Desire to Learn',
      desc: 'Being better every day is something that I like and is essential for me, and I am sure that it is an essential skill in my life, whether personally or professionally.',
      titleBg: this.learningBg,
     
    },
  ];
}
