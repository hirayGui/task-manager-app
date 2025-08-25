import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  // exemplo com a utilização de Signals. A grosso modo falando, apenas a declaração das variáveis mudaria.
  /* title = signal('');
  summary = signal('');
  dueDate = signal(''); */

  title = '';
  summary = '';
  dueDate = '';

  // Inject() é uma alternativa para o construct()
  private tasksService = inject(TasksService);

  onCancelAddTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.title,
        summary: this.summary,
        date: this.dueDate,
      },
      this.userId
    );

    this.close.emit();
  }
}
