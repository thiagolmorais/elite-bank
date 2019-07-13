import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  user$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.user$ = this.authService.correntUser;
  }

}
