import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatahandlerService } from '../datahandler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  userForm: FormGroup; 
  userEditableFields:any;
  isAdmin=false;
  constructor(private fb: FormBuilder,private dataService:DatahandlerService) {
    this.userEditableFields=dataService.getUserEditableFields();
    this.userForm = this.fb.group({
      id:[this.dataService.loginUser?.id],
      firstName: [{
        value:this.dataService.loginUser?.firstName,
        disabled:!this.userEditableFields.firstName
      }, Validators.required],
      middleName: [{
        value:this.dataService.loginUser?.middleName,
        disabled:!this.userEditableFields.middleName
      }],
      lastName: [
        {
          value:this.dataService.loginUser?.lastName,
          disabled:!this.userEditableFields.lastName
        }, Validators.required],
      email: [
        {
          value:this.dataService.loginUser?.email,
          disabled:!this.userEditableFields.email
        }, [Validators.required, ]],
      phone: [{
        value:this.dataService.loginUser?.phone,
        disabled:!this.userEditableFields.phone
      }],
      profilePictureUrl: [{
        value:this.dataService.loginUser?.profilePictureUrl,
        disabled:true
      }],
      username: [{
        value:this.dataService.loginUser?.username,
        disabled:true
      }],
      password: [{
        value:this.dataService.loginUser?.firstName
      }],
      role: [{
        value:this.dataService.loginUser?.firstName,
        disabled:true
      }]
    });
     
  }

  ngOnInit(): void {
    this.isAdmin=this.dataService.loginUser?.role=='Admin';
    if(this.isAdmin){
      this.userForm.enable();
    }
  }
  onSubmit(){
    this.dataService.setUserData(this.userForm.getRawValue());
    alert('Updated')
  }
}
