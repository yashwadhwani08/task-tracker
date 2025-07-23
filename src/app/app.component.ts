// import { Component } from '@angular/core';
import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { type User } from './user/user.model';
// import { NgFor, NgIf } from '@angular/common';

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  // selectedUser !: string;
  selectedUser = signal<User | undefined>(undefined); 

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id);
    const foundUser = this.users.find((element) => element.id === id);
    // this.selectedUser = foundUser ? foundUser.name : '';
    this.selectedUser.set(foundUser ? foundUser : undefined);
  }
}
