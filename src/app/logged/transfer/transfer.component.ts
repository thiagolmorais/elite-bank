import { Component, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';
import { DestAccount } from 'src/model/DestAccount';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { log } from 'util';
import { Login } from 'src/model/login';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  user$: Observable<any>;

  loginData: Login = { account: null, password: [] };
  dataLoading: Boolean = false;
  errorMessage: String = "";
  
  /*
    TODO: Account será pego do login, tirar esse código após implementação do login
  */

  accountNumber = null;
  
  balance = null;

  destAccount: DestAccount = {
    id: null,
    account: null,
    name: '',
    email: ''
  };

  destAccountNumber = null;
  
  transferValue = null;

  token = null;

  password = null;
  
  constructor(private transferService: TransferService,
    private authService: AuthService, 
    private router: Router) { }
  
    ngOnInit() {
      this.user$ = this.authService.currentUser;
      this.accountNumber = parseInt(localStorage.getItem('account'))
      this.token = localStorage.getItem('token')
      this.balance = localStorage.getItem('balance')
  }

  checkDestAccount() {
    if(this.accountNumber === this.destAccountNumber) {
      alert('Não é possivel fazer uma tranferência em sua própria conta!')
      return;
    }
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
    console.log(this.password, this.token, this.accountNumber, this.destAccount.account, this.transferValue)
    this.transferService.transferValue(this.password, this.token, this.accountNumber, this.destAccount.account, this.transferValue).subscribe((resp: any) => {
      console.log(resp)
      const { message } = resp
      alert(message)
      return this.router.navigateByUrl('/extract'); 
    });
  }
}
