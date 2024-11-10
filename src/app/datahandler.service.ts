import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  constructor(private router:Router) { }
  userData :User[]=[
    { "id": 1731139357163, "firstName": "Admin", "middleName": "Admin", "lastName": "Admin", "email": "Admin", "phone": "Admin", "profilePictureUrl": "Admin", "username": "Admin", "password": "Admin", "role": "Admin" }, 
    { "id": 1731139357164, "firstName": "User", "middleName": "User", "lastName": "User", "email": "User", "phone": "User", "profilePictureUrl": "User", "username": "User", "password": "User", "role": "User" } 
  ]
  userEditableFields={
    firstName: true,
    middleName: true,
    lastName: true,
    email: true,
    phone: true,
    profilePictureUrl: true,
    username: true,
    password: true,
    role: true,
  }
  loginUser:User|null=null;
  setUserEditableFields(data:any){
    localStorage.setItem('UserEditableFields',JSON.stringify(data))
  }
  getUserEditableFields(){
    return JSON.parse(
        localStorage.getItem('UserEditableFields')
        ? localStorage.getItem('UserEditableFields')!
        : JSON.stringify(this.userEditableFields)
    ); }
  setUserData(user:User) {   
    if(user.id == 0 ||user.id == null){
      user.id= Date.now();
      this.userData.push(user)
    }
    else{
      const index = this.userData.findIndex(user => user.id === user.id);
      if (index !== -1) {
        this.userData[index] = { ...user };
      }
    }  
  }
  onLogin(userName:string,pass:string):User|null{
   let data= this.userData.filter(el=> el.username.toLowerCase() ==userName.toLowerCase() && el.password.toLowerCase()==pass.toLowerCase());
   if(data[0]){
     return data[0];
   }
   else{
    alert('User not found');
    return null;
   }
  }

  onLogout(){
    this.loginUser=null;
    this.router.navigate(['/auth']);
  }
  }
