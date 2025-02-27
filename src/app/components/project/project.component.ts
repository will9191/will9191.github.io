import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectComponent {
  @Input() public project: any;

  constructor(private matDialog: MatDialog) { }

  openDialog(data: any) {
    let dialog = this.matDialog.open(PopupComponent, { data: data });
  }
}
