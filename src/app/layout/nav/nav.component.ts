import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatahandlerService } from '../../datahandler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  role:string='';
 constructor(private dataService:DatahandlerService){}
  ngOnInit(): void {
    this.role=this.dataService.loginUser!.role;
  }
}
