import { Injectable } from '@angular/core';
import { Contract } from '../models/contract.model';
import serviceContract from '../component/contract-models/service-contract';
import { KeyValue } from '@angular/common';

@Injectable()
export class ContractService {
  contract: Contract;

  getContract = (): Contract => this.contract || (serviceContract as Contract);

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
}
