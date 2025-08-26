import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import { CardComponent } from './shared/card/card';
import { TaskComponent } from './tasks/task/task';
import { NewTaskComponent } from './tasks/new-task/new-task';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent
  ], //modules
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule], //standalone components
})
export class AppModule {}
