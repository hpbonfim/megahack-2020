import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss'],
})
export class BottomMenuComponent implements OnInit {
  menu = {
    index: 1,
    search: 2,
    requests: 3,
    profile: 4,
  };
  active = this.menu.index;

  constructor() {}

  ngOnInit(): void {}
}
