
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  addTask(task: Task): Observable<Task> {
    // The backend expects only description for creation, so we send a partial object
    const taskCreate = { description: task.description };
    return this.http.post<Task>(`${this.apiUrl}/tasks`, taskCreate);
  }
}
