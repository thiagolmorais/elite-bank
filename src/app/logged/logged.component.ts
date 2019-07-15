import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  user$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user$ = this.authService.currentUser;
  }

  logout() {
    this.authService.logout()
  }

}
