




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
  imagePreview: string | ArrayBuffer | null = null;

  user: any = null; // ✅ store logged-in user

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

      this.imagePreview = this.user.image;
    }
  }

 
  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;

      
        this.user.image = reader.result;


        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('registeredUser', JSON.stringify(this.user));
      };

      reader.readAsDataURL(file);
    }
  }


  onSubmit() {
    if (this.profileForm.valid) {

      const updatedData = this.profileForm.getRawValue();

      
      this.user = {
        ...this.user,
        ...updatedData
      };


      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('registeredUser', JSON.stringify(this.user));

      alert('Profile Updated Successfully');
    }
  }
}