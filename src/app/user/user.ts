import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  // a exclamacao informa ao TS que o tipo esperado sera enviado
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// selectedUser = signal(DUMMY_USERS[randomIndex]);

// // alterando state com uso de signals
// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
// imageAlt = computed(() => this.selectedUser().name + ' photo');

// Alterando state via zone.js
// get imagePath(){
//   return 'assets/users/' + this.selectedUser.avatar;
// }
// get imageAlt(){
//   return this.selectedUser.name + ' photo';
// }

// onSelectedUser(){
//   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//   this.selectedUser.set(DUMMY_USERS[randomIndex]);
// }
