import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../model/user';
import { CommonModule } from '@angular/common'; 
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent  implements OnInit{
  isModalOpen = false;  
  userForm: FormGroup;
  users: User[] = []; 
  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'role', 'actions'];

  constructor(private fb: FormBuilder,private dataService:DatahandlerService) {
    this.userForm = this.fb.group({
      id:[0],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, ]],
      phone: [''],
      profilePictureUrl: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['Admin', Validators.required]
    });
  }
 ngOnInit(): void {
   this.users= this.dataService.userData;
 }
  onSubmit() {  
    const userData = this.userForm.value;
     this.dataService.setUserData(userData);
     this.users= this.dataService.userData;
    
    this.closeModal();
  }

  addUser( ) {
     this.isModalOpen=true;
  }

  editUser(user: User) { 
    this.userForm.patchValue(user); 
    this.isModalOpen = true;
  }

  

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  
  closeModal(){
    this.isModalOpen=false;
    this.userForm.reset(); 
    this.userForm.patchValue({id:0,role:'Admin'})
  }
}
