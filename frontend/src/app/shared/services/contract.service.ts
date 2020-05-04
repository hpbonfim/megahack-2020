import { Injectable } from '@angular/core';
import { Contract } from '../models/contract.model';
import serviceContract from '../component/contract-models/service-contract';
import { KeyValue } from '@angular/common';

@Injectable()
export class ContractService {
  contract: Contract;
  contracts: Contract[];

  getContract = (): any => this.contract || { ...serviceContract };

  fillBlock = (blockTitle: string, infos: KeyValue<string, string>[]) => {
    const contract = this.getContract();
    const contractBlock = contract.blocks.find(
      (block) => block.title === blockTitle
    );

    infos.forEach((info) => {
      info.key = info.key.replace(/\{/g, '\\{');
      info.key = info.key.replace(/\}/g, '\\}');
      const teste = new RegExp(info.key, 'g');
      contractBlock.description = contractBlock.description.replace(
        teste,
        info.value
      );
    });
  };

  createContract = (contract: Contract) => {
    this.contracts = JSON.parse(window.localStorage.getItem('contracts')) || [];
    this.contracts.push(contract);
    window.localStorage.setItem('contracts', JSON.stringify(this.contracts));
  };

  getUserContracts = (userId: string) => {
    const allContracts =
      JSON.parse(window.localStorage.getItem('contracts')) || [];
    return allContracts.filter((contract) => contract.userId === userId) || [];
  };
}
