import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandlerService } from '../../datahandler.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(  private service: DatahandlerService) {}

  logout() { 
    this.service.onLogout();
  }
}