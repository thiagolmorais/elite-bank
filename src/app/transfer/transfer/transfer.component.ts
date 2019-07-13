import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { DestAccount } from 'src/model/DestAccount';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  user$: Observable<any>;
  
  /*
    TODO: Account será pego do login, tirar esse código após implementação do login
  */

  accountNumber = null;

  destAccount: DestAccount = {
    id: null,
    account: null,
    name: '',
    email: ''
  };

  destAccountNumber = null;
  
  transferValue = null;
  
  constructor(private transferService: TransferService,
    private authService: AuthService, 
    private router: Router) { }
  
    ngOnInit() {
      this.authService.checkToken();
      this.user$ = this.authService.currentUser;
      this.accountNumber = localStorage.getItem('account')
  }

  checkDestAccount() {
    this.transferService.destAccount(this.destAccountNumber).subscribe((resp: any) => {
      const { response, message } = resp
      if(response) {
        this.destAccount = message
        return this.destAccount
      }
      return alert(message); 
    });
  }

  transfer() {
    this.transferService.transferValue(this.accountNumber, this.destAccount.account, this.transferValue).subscribe((resp: any) => {
      const { message } = resp
      alert(message)
      return this.router.navigateByUrl('/extract'); 
    });
  }
}
