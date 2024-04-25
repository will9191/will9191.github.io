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

  id!: string;
  img!: string;
  text!: string;

  ngOnInit(): void {
    this.id = this.data.id;
    this.img = this.data.img;
    this.text = this.data.text;
    this._renderer.setStyle(document.body, 'overflow-y', 'hidden');
  }

  ngOnDestroy(): void {
    this._renderer.removeStyle(document.body, 'overflow-y');
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }
}
