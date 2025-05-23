import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { H1Component } from './components/h1/h1.component';
import { PComponent } from './components/p/p.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, H1Component, PComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-wise';
}
