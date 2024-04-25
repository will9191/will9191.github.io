import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
})
export class ErrorModalComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog
  ) {}

  title = '';

  ngOnInit(): void {
    this.title = this.data;
    console.log(this.title);
  }

  ngOnDestroy(): void {}
}
