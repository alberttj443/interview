import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from '../model/user';
import { DatahandlerService } from '../datahandler.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{
  constructor(private dataService:DatahandlerService){}
 
  users:User[]=[];
  usereditableFields=this.dataService.getUserEditableFields();
  ngOnInit(): void {
    this.users=   this.dataService.userData.filter(el=>el.role !='Admin');
  }
  onCheck(): void {
    this.dataService.setUserEditableFields(this.usereditableFields)
  }
 
   
}
