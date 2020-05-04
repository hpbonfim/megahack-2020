import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Contract } from '../../models/contract.model';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss'],
})
export class ContractCardComponent implements OnInit {
  @Input() contract: any;
  @Input() selected: boolean;
  @Input() userContract = false;
  @Output() selectCard = new EventEmitter();

  selectedModel: number;

  constructor() {}

  ngOnInit(): void {}

  selectModel = (id) => {
    this.selectedModel = id;
    this.selectCard.emit(id);
  };
}
