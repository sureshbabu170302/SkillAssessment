import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../Models/UserRegister.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private register: RegisterService) {
    this.myForm = this.fb.group({
      user_FirstName: ['', Validators.required],
      user_LastName: ['', Validators.required],
      user_Departmenr: ['', Validators.required],
      user_DOB: ['', Validators.required],
      user_Gender: ['', Validators.required],
      user_EduLevel: ['', Validators.required],
      user_Email: ['', [Validators.required, Validators.email]],
      user_PhoneNo: ['', Validators.required],
      user_Location: ['', Validators.required],
      user_Address: ['', Validators.required],
      user_Password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.myForm.valid) {
      const user: User = {
        User_ID: 0, // You can set the ID based on your requirements
        User_FirstName: this.myForm.get('user_FirstName')?.value,
        User_LastName: this.myForm.get('user_LastName')?.value,
        User_Departmenr: this.myForm.get('user_Departmenr')?.value,
        User_Designation: '', // You can add this property if needed
        User_DOB: this.myForm.get('user_DOB')?.value,
        User_Gender: this.myForm.get('user_Gender')?.value,
        User_EduLevel: this.myForm.get('user_EduLevel')?.value,
        User_PhoneNo: this.myForm.get('user_PhoneNo')?.value,
        User_Location: this.myForm.get('user_Location')?.value,
        User_Address: this.myForm.get('user_Address')?.value,
        User_Email: this.myForm.get('user_Email')?.value,
        User_Password: this.myForm.get('user_Password')?.value
      };

      // Call the registration service to handle the submission
      this.register.createUser(user).subscribe((response: any) => {
        // Handle the response from the server
      });
    }
  }
}
