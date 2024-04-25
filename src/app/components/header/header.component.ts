import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: any = [
    {
      id: 1,
      name: "about",
      dest: "#about"
    },
    {
      id: 2,
      name: "projects",
      dest: "#projects"
    },
    {
      id: 3,
      name: "skills",
      dest: "#skills"
    },
  ];
}
