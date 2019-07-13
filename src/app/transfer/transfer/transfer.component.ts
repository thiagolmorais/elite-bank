import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { DestAccount } from 'src/model/DestAccount';
import { Account } from 'src/model/Account';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  /*
    TODO: Account será pego do login, tirar esse código após implementação do login
  */

  user$: Observable<any>;

  account: Account = {
    id: 100002,
    account: 100002,
    name: "Correntista da Silva",
    password: "123456",
    balance: 120.00,
    email: "correntista@email.com",
    created: "2018-10-31"
  };

  destAccount: DestAccount = {
    id: null,
    account: null,
    name: '',
    email: ''
  };

  destAccountNumber = null;

  transferValue = null;

  constructor(private transferService: TransferService, private authService: AuthService) { }
  
  ngOnInit() {
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
    this.transferService.transferValue(this.account.account, this.destAccount.account, this.transferValue).subscribe((payload) => {
      console.log(payload)
    })
  }
}
