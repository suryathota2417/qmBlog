




import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrls: ['./signin.scss']
})
export class Signin {

  signinForm: FormGroup;
  errorMsg: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {

      const { email, password } = this.signinForm.value;

      const storedUser = localStorage.getItem('registeredUser');
      const user = storedUser ? JSON.parse(storedUser) : null;

      if (user && email === user.email && password === user.password) {

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(user));

        this.router.navigate(['/']);

      } else {
        this.errorMsg = 'Invalid email or password';
      }

    } else {
      this.signinForm.markAllAsTouched();
    }
  }
}