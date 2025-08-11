import { Component, signal } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common'; 
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks";

@Component({
  selector: 'app-root', // nome do componente
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html', // conteudo do componente
  styleUrl: './app.css', // estilizacao do componente
})
export class App {
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
