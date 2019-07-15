import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { ExtractService } from './extract.service';
import { Extract } from 'src/model/extract';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  user$: Observable<any>;
  accountNumber = null;
  token = null;
  extractAccount: Extract = null;

  constructor(private authService: AuthService, private extractService: ExtractService) { }

  ngOnInit() {
    this.user$ = this.authService.currentUser;
    this.token = localStorage.getItem('token');
    this.accountNumber = localStorage.getItem('account');
    this.extract()
  }

  extract() {
    this.extractService.getExtracts(this.accountNumber, this.token).subscribe((resp: any) => {
      const {response, message} = resp;
      if(response === false) {
        alert('Erro: ' + message);
        return;
      }
      this.extractAccount = message;
      console.log(this.extractAccount);
      
    });
  }
}
