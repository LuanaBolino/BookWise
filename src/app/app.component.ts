import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ImagemComponent } from './imagem/imagem.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, ImagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-wise';
}
