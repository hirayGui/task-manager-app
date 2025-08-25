import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  
  // exemplo com a utilização de Signals. A grosso modo falando, apenas a declaração das variáveis mudaria.
  /* title = signal('');
  summary = signal('');
  dueDate = signal(''); */

  title = '';
  summary = '';
  dueDate = '';

  onCancelAddTask(){
      this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.title,
      summary: this.summary,
      date: this.dueDate,
    });
  }
}
