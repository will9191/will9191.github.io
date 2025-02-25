import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export class PopupComponent implements OnInit, OnDestroy {
  constructor(
    private _renderer: Renderer2,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this._renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    this._renderer.removeStyle(document.body, 'overflow');
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }
}
