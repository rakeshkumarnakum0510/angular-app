import { Component, Input, OnInit } from '@angular/core';
import { CaseService } from './case.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-first-app';
  isLoggedIn = false;
  @Input() public isUserLoggedIn: boolean;


  constructor(private caseService: CaseService,private router: Router,) {
    if(!this.caseService.isUserLoggedIn()){
      this.router.navigate(['/login']); 
     }
   }
  ngOnInit() {
    this.isLoggedIn = this.caseService.isUserLoggedIn();
  
  }
  handleLogout() {
    this.caseService.logout();
    this.router.navigate(['/login']);
  }
}
