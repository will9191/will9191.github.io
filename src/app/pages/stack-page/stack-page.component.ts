import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about/about.component";
import { StackComponent } from "../../components/stack/stack.component";

@Component({
  selector: 'app-stack-page',
  standalone: true,
  imports: [AboutComponent, StackComponent],
  templateUrl: './stack-page.component.html',
  styleUrl: './stack-page.component.scss'
})
export class StackPageComponent {

}
