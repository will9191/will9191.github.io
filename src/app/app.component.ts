import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PopupComponent } from './components/popup/popup.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PopupComponent,
    ProjectsComponent,
    SkillsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'will9191.github.io';
}
