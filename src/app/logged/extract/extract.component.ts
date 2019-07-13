import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  user$: Observable<any>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkToken();
    this.user$ = this.authService.currentUser;
  }

}
