import { Component, inject } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { NgModule } from "@angular/core";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthServiceService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue()
    
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe({
      next: () => {
      this.router.navigateByUrl('/');
      }, 
      error: (err) => {
        this.errorMessage = err.code;
      }
  });
  }
}
