import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root', // nome do componente
  standalone: false,
  templateUrl: './app.html', // conteudo do componente
  styleUrl: './app.css', // estilizacao do componente
})
export class AppComponent {
  protected readonly title = signal('first-angular-app');

  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
