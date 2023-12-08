import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  myForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private ac: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.initForm();
    localStorage.clear();

  }

  ngOnDestroy(): void {}
  
  initForm() {
    this.myForm = this.fb.group({
      email: ['admin@gmail.com', [Validators.required]],
      password: ['admin', [Validators.required]],
    });
  }

  onSubmit() {
    const formData: User = this.myForm.value;
    console.log(formData);
    // Simulate a login request
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
      const user: User = {
        email: formData.email,
        password: formData.password,
        role: 'ROLE_ADMIN'
      };
      console.log(user);
      localStorage.setItem('token', 'your_token');
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
    } else {
      const user: User = {
        email: formData.email,
        password: formData.password,
        role: 'ROLE_ETUDIANT'
      };
      console.log(user);
      localStorage.setItem('token', 'your_token');
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/user/etudiantf']);
    }
  }
}