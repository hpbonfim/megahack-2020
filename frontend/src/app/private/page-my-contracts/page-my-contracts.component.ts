import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';

@Component({
  selector: 'app-page-my-contracts',
  templateUrl: './page-my-contracts.component.html',
  styleUrls: ['./page-my-contracts.component.scss'],
})
export class PageMyContractsComponent implements OnInit {
  @Input() userContracts: any[] = [];

  selectedContractId: number;

  constructor() {}

  ngOnInit(): void {}

  selectContract(id: number) {
    this.selectedContractId = id;
  }
}
