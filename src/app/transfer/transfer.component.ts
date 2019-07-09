import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { DestAccount } from '../typings/DestAccount';
import { Account } from '../typings/Account';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  /*
    TODO: Account será pego do login, tirar esse código após implementação do login
  */
  account: Account = {
    id: 98765,
    account: 98765,
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

  constructor(private accountService: AccountService) { }
  
  ngOnInit() {
  }

  checkDestAccount() {
    this.accountService.destAccount(this.destAccountNumber).subscribe((destAccount: DestAccount) => {
      this.destAccount = destAccount
    });
  }

  transfer() {
    this.accountService.transferValue(this.account.account, this.destAccount.account, this.transferValue).subscribe(() => {
      alert ('Valor transferido com sucesso');
    })
  }
}
