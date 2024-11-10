import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService:DatahandlerService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {  
    this.loginForm.markAllAsTouched();  
    if (this.loginForm.valid) {
     let data= this.dataService.onLogin(this.loginForm.value.username, this.loginForm.value.password);
     if(data){
      this.dataService.loginUser=data;
      window.history.pushState(null, '', window.location.href);

      this.router.navigate(['']);
     }
    
    }
  }
}
