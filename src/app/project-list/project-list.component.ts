import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Project {
  id: string;
  name: string;
}


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

  constructor() {
    
  }

  addProject() {

  }

  deleteProject(projectId: string) {

  }


}
