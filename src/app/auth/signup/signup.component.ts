import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/app/model/user.model';
import { MustMatch } from 'src/app/model/control.helpers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm: FormGroup;
  submitted = false;
 
 
//roles = ['Super Admin', 'Property Manager', 'Tenant', 'User'];
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) 
  { }

 ngOnInit() {

  this.signupForm = this.fb.group({
    _id: ['', Validators.required],
   title: ['', Validators.required],
   gender: [''],
   name: ['', Validators.required],
   otherNames: ['', Validators.required],
   terms: [false, Validators.requiredTrue],
   email: ['', [Validators.required, Validators.email]],
   role:['', Validators.required],
   password: ['', [Validators.required, Validators.minLength(6)]],
   confirmPassword:['', Validators.required],
   physicalAddress: ['', Validators.required],
   phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+254-?)|0)?[0-9]{12}$")]],
   dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
   
  }),
  {
    Validator: MustMatch('password','comfirmPassword')
  }

    

  }
  get f() {
    return this.signupForm.controls;
  }
  signUp() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    const newUser: User = {
      _id: this.signupForm.get('_id').value,
      title: this.signupForm.get('title').value,
      name: this.signupForm.get('name').value,
      otherNames: this.signupForm.get('otherNames').value,
      phoneNumber: this.signupForm.get('phoneNumber').value,
      email: this.signupForm.get('email').value,
      physicalAddress: this.signupForm.get('physicalAddress').value,
      dob: this.signupForm.get('dob').value,
      role: this.signupForm.get('role').value,
      password: this.signupForm.get('password').value,
      confirmPassword: this.signupForm.get('confirmPassword').value,
      terms: this.signupForm.get('terms').value,
      gender: this.signupForm.get('gender').value,
     //_id: 'po',
      //gender: ''
    }; 
    this.authService.signUp(newUser).subscribe((res) => {
       console.log('new signup', res)
      this.router.navigate(['/log-in']);
    });
   
  }
  onReset() {
    this.submitted = false;
    this.signupForm.reset();
  }
}

  