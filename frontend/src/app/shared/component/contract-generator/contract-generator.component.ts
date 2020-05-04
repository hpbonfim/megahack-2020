import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Contract } from '../../models/contract.model';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-contract-generator',
  templateUrl: './contract-generator.component.html',
  styleUrls: ['./contract-generator.component.scss'],
})
export class ContractGeneratorComponent implements OnInit {
  @Input() contract: Contract;
  @Input() showSubmitButton = true;
  @Input() showCloseButton = false;
  @Output() handleSubmit = new EventEmitter();
  @Output() goBack = new EventEmitter();

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.contract = this.contract || this.contractService.getContract();
  }
}
