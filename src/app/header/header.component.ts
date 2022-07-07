import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private accountService: AccountService,
              private serverService: ServerService) { }

  ngOnInit(): void {
  }

  getAccountName() {
    return this.accountService.getName();
  }

  getServerName() {
    return this.serverService.getName();
  }

  getRunning() {
    return false;
  }

}
