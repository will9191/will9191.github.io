import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectComponent {
  @Input() public project: any;

  constructor(private dialogRef: MatDialog) {}

  openDialog(data: any) {
    this.dialogRef.open(PopupComponent, { data: data });
  }
}
