import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Contract } from '../../models/contract.model';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-contract-generator',
  templateUrl: './contract-generator.component.html',
  styleUrls: ['./contract-generator.component.scss'],
})
export class ContractGeneratorComponent implements OnInit {
  contract: Contract;

  @ViewChild('buttonAdd') buttonAdd;

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.contract = this.contractService.getContract();
  }
}
