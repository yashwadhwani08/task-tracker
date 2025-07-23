// import { Component, computed, signal } from '@angular/core';
// import { Component, computed, input, Input } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { Component, Input, output } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User{
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;

  // @Input({ required: true }) user !: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }
  @Input({ required: true }) user !: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>() 

  // avatar = input.required<string>();
  // name = input.required<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)

  // // get imagePath(){
  // //   return 'assets/users/'+ this.selectedUser.avatar
  // // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    // // this.selectedUser = DUMMY_USERS[randomIndex]

    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => 'assets/users/' + this.avatar())
}
