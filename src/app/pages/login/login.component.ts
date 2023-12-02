import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {
  myForm: FormGroup;
 

  constructor(private router: Router , private fb:FormBuilder, private userService: UserService, private ac : ActivatedRoute) {}
 
 
  ngOnInit(): void {
    this.initForm();
    localStorage.clear();
  }
  ngOnDestroy(): void {
      
  }


  initForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
     
    });
  }

  onSubmit(){
    const formData: User = this.myForm.value; 
    console.log(formData);
    this.userService.login(formData).subscribe({
      next:(data)=> {
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['/etudiant']);
      },

      error:(error)=>{console.log(error)}             
});
  }




  


}
