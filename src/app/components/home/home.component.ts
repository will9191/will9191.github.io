import { Component } from '@angular/core';

const githubIcon = '../../../assets/github.svg';
const linkedinIcon = 'assets/linkedin.svg';
const gmailIcon = 'assets/gmail.svg';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  will = 'assets/will.jpg';
  socialLinks = [
    {
      id: 1,
      name: 'github',
      img: githubIcon,
      link: 'https://github.com/will9191',
    },
    {
      id: 2,
      name: 'linkedin',
      img: linkedinIcon,
      link: 'https://www.linkedin.com/in/will9191/',
    },
    {
      id: 3,
      name: 'gmail',
      img: gmailIcon,
      link: "mailto:willian.contato91@gmail.com?subject=Olá!"
    },
  ];
}
