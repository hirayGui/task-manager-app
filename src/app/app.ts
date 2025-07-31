import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header';

@Component({
  selector: 'app-root', // nome do componente
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html', // conteudo do componente
  styleUrl: './app.css' // estilizacao do componente
})
export class App {
  protected readonly title = signal('first-angular-app');
}
