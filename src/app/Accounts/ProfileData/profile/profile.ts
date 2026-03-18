import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {

  profileForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      firstName: ['Surya', Validators.required],
      lastName: ['Thota', Validators.required],
      mobile: [{ value: '9876543210', disabled: true }],
      email: ['surya@gmail.com', [Validators.required, Validators.email]]
    });
  }

  // Image Upload
  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  // Submit
  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.getRawValue());
      alert('Profile Updated Successfully');
    }
  }
}