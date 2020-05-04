import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contract } from 'src/app/shared/models/contract.model';
import { ContractService } from 'src/app/shared/services/contract.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
export class UserShellComponent implements OnInit {
  tabMap = {
    home: 0,
    plans: 1,
    models: 2,
    myContracts: 3,
  };
  selectedTabIndex = 0;
  userContracts: Contract[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    const { queryParams } = this.activatedRoute.snapshot;
    this.loadUserContracts();
    if (queryParams.goTo) {
      this.goToTab(queryParams.goTo);
    }
  }

  changeTabIndex = (tabName) => (this.selectedTabIndex = this.tabMap[tabName]);

  loadUserContracts = () => {
    const { _id } = this.userDataService.getUserData();
    this.userContracts = this.contractService.getUserContracts(_id);
  };

  private goToTab = (tabName) => {
    this.loadUserContracts();
    this.selectedTabIndex = this.tabMap[tabName];
  };
}
