import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { ExtractService } from './extract.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  user$: Observable<any>;
  accountNumber = null;
  extractAccount = null;

  constructor(private authService: AuthService, private extractService: ExtractService) { }

  ngOnInit() {
    this.authService.checkToken();
    this.user$ = this.authService.currentUser;
    this.accountNumber = localStorage.getItem('account')
  }

  extract() {
    this.extractService.getExtracts(this.accountNumber).subscribe((resp: any) => {
      console.log(resp)
      this.extractAccount = resp
      return this.extractAccount
    });
  }
}
