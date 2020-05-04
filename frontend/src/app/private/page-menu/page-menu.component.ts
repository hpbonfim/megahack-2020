import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.scss'],
})
export class PageMenuComponent implements OnInit {
  @Output() changeTabIndex = new EventEmitter();

  selectModelTabName = 'models';

  constructor() {}

  ngOnInit(): void {}

  goToContractModels = () => this.changeTabIndex.emit(this.selectModelTabName);
}
