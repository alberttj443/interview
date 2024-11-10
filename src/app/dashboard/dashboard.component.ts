import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
 constructor(private dataService:DatahandlerService){}
 normaluser=0;
  adminUser=0;
  ngOnInit(): void {
    this.adminUser=this.dataService.userData.filter(el=>el.role=='Admin').length;
    this.normaluser=this.dataService.userData.filter(el=>el.role!='Admin').length;
  }
  
  
}
