import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  universities: Universite[] = [];
  selectedUniversite: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private universityService: UniversiteService,
    private userService: UserService,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getUniversities();
  }

  getUniversities() {
    this.universityService.getAllUniversities().subscribe(
      (universites: Universite[]) => {
        console.log(universites);
        this.universities = universites;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {}

  initForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      prenomEt: ['', [Validators.required]],
      cin: ['', [Validators.required]],
      ecole: [this.selectedUniversite, [Validators.required]],
      dateNaissance: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      agreePrivacyPolicy: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const formData = this.registerForm.value;
    const userRole = 'ROLE_ETUDIANT';

    const userData = {
      nomEt: formData.name,
      prenomEt: formData.prenomEt,
      cin: formData.cin,
      ecole: formData.ecole,
      dateNaissance: formData.dateNaissance,
      email: formData.email,
      password: formData.password,
      role: userRole
    };

    this.userService.register(userData).subscribe(
      (token: string) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
        // Handle error, show an error message, etc.
      }
    );
  }
}