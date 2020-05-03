import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.scss'],
})
export class ContractCardComponent implements OnInit {
  @Input() model: any;
  @Input() selected: boolean;
  @Output() selectCard = new EventEmitter();

  selectedModel: number;

  constructor() {}

  ngOnInit(): void {}

  selectModel = (id) => {
    this.selectedModel = id;
    this.selectCard.emit(id);
  };
}
