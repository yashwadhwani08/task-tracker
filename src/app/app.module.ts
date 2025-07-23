import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
// import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';
// import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    // CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  //   imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent],
//   imports: [BrowserModule, FormsModule],
  imports: [BrowserModule, FormsModule, SharedModule],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
