import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  progress: number = 50; // Set initial progress to 50%
  steps: any[] = [
    { label: 'Step 1', width: 20 },
    { label: 'Step 2', width: 30 },
    { label: 'Step 3', width: 25 },
    { label: 'Step 4', width: 25 }
  ];

  constructor() { }
}
