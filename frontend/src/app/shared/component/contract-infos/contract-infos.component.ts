import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contract } from '../../models/contract.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import markForm from '../../functions/mark-form.function';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-contract-infos',
  templateUrl: './contract-infos.component.html',
  styleUrls: ['./contract-infos.component.scss'],
})
export class ContractInfosComponent implements OnInit {
  @Input() contract: Contract = new Contract();
  @Output() setContractIsFilled = new EventEmitter();

  form: FormGroup;
  blocks: any[];

  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.createForm();
  }

  handleSubmit = () => {
    markForm(this.form);

    if (this.form.invalid) {
      return;
    }

    this.blocks.forEach((block) => {
      const infos = block.controls.map((control) => {
        const key = `{${control.controlName}:${control.label}}`;
        const value = this.form.get(control.controlName).value;
        return { key, value };
      });
      this.contractService.fillBlock(block.blockTitle, infos);
    });

    this.setContractIsFilled.emit();
  };

  private createForm() {
    this.form = new FormGroup({});
    this.blocks = this.getContractInputs();
    this.blocks.forEach((input) => {
      input.controls.forEach((control) => {
        this.form.addControl(
          control.controlName,
          new FormControl('', Validators.required)
        );
      });
    });
  }

  private getContractInputs() {
    const inputArray = [];
    this.contract.blocks.forEach((block) => {
      const inputs = block.description.match(/\{([^}]+)\}/g);
      if (inputs) {
        const controls = inputs.map((i) => {
          const [controlName, label] = i.replace(/\{|\}/g, '').split(':');
          return { controlName, label };
        });
        inputArray.push({ blockTitle: block.title, controls });
      }
    });

    return inputArray;
  }
}
