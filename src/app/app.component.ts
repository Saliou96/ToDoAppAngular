import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent{
  title = 'ToDoApp';
  newTask: string = '';

  tasks : Array<{ done: boolean; text: string }> = [
    { done: false, text: 'Install Dependencies' },
    { done: false, text: 'Product Feature' },
    { done: false, text: 'Write Unit test' },
    { done: false, text: 'Deploy app' },
  ];

  //Add task
  addTask(newTask: string): void {
    if (newTask.trim() !== '') {
      this.tasks.push({ done: false, text: newTask });
      this.newTask = '';
    }
  }

  //Update text name when click on edit button
  changeName(task:any){
    const index = this.tasks.indexOf(task)
    this.tasks[index].text = "New task";
  }

  //Delete task after confirm dialog
  deleteTask(task:any): void {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?');
    const index = this.tasks.indexOf(task)
    if (confirmDelete) {
      this.tasks.splice(index, 1);
    }
  }
  //Clear task list
  clearTasks(): void {
    this.tasks = [];
  }
}
