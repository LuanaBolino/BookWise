import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  imagemUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  altText: string = 'Logo do Angular';
}
