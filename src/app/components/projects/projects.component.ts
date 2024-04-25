import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private dialog: MatDialog) {}

  setError(data: any) {
    const dialogRef = this.dialog.open(ErrorModalComponent, { data: data });
    dialogRef.afterOpened().subscribe((_) => {
      setTimeout(() => {
        dialogRef.close();
      }, 2000);
    });
  }

  javaImg = 'assets/primaryTechs/java.svg';
  eyeSvg = 'assets/eye.svg';
  devIcon = '</>';

  empregueiCodeImg = 'assets/empreguei/code.png';
  empregueiDeployImg = 'assets/empreguei/deploy.jpeg';

  wclothingCodeImg = 'assets/wclothing/code.png';
  wclothingDeployImg = 'assets/wclothing/deploy.png';

  projects = [
    {
      title: 'Empreguei',
      subTitle: 'TCC project about a job website',
      codeImg: this.empregueiCodeImg,
      deployImg: this.empregueiDeployImg,
      deploy: '',
      code: 'https://github.com/will9191/Empreguei',
    },
    {
      title: 'W Clothing',
      subTitle: 'Ecommerce website',
      codeImg: this.wclothingCodeImg,
      deployImg: this.wclothingDeployImg,
      deploy: '',
      code: 'https://github.com/will9191/ecommerce',
    },
  ];
}
