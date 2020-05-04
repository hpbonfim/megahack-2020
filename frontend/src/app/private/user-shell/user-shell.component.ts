import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { queryParams } = this.activatedRoute.snapshot;
    if (queryParams.goTo) {
      this.goToTab(queryParams.goTo);
    }
  }

  changeTabIndex = (index) => (this.selectedTabIndex = index);

  private goToTab = (tabName) => {
    this.selectedTabIndex = this.tabMap[tabName];
  };
}
