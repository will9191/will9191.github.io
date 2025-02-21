import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  providers: [MatDialog],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

}
