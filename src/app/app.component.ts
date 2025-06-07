import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidnavComponent } from './sidnav/sidnav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidnavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-wise';
}
