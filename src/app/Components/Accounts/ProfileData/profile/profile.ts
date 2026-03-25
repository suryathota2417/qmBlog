
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile implements OnInit {

  profileForm: FormGroup;
  user: any = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    const data = localStorage.getItem('user');
    this.user = data ? JSON.parse(data) : null;

    if (this.user) {
      this.profileForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        mobile: this.user.mobile,
        email: this.user.email
      });
    }
  }

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const base64 = await this.readFile(file);

    this.user ??= {};
    this.user.image = base64;

    this.saveUser();
  }

  readFile(file: File) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedData = this.profileForm.getRawValue();

      this.user = {
        ...this.user,
        ...updatedData
      };

      this.saveUser();

      alert('Profile Updated Successfully');
    }
  }

  private saveUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('registeredUser', JSON.stringify(this.user));
  }
}