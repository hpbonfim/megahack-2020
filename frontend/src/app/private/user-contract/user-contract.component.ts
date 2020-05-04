import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

import models from '../page-models/models';
import serviceContract from 'src/app/shared/component/contract-models/service-contract';
import { ContractEncryptService } from './contract-encrypt.service';
import { ContractService } from 'src/app/shared/services/contract.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';
import { Contract } from 'src/app/shared/models/contract.model';

@Component({
  selector: 'app-user-contract',
  templateUrl: './user-contract.component.html',
  styleUrls: ['./user-contract.component.scss'],
})
export class UserContractComponent implements OnInit {
  model: { title: string; description: string };
  models = models;
  contract = { ...serviceContract };
  filledContract: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService,
    private contractEncryptService: ContractEncryptService,
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.fillModel(id);
  }

  encryptContract = () => {
    const payload = this.contractService.getContract();
    const {
      phoneNumber,
      stateCode,
      fullName,
      countryCode,
      _id,
    } = this.userDataService.getUserData();
    const body = {
      fullName,
      payload: JSON.stringify(payload),
      phoneNumber: `${countryCode || '55'}${stateCode}${phoneNumber}`,
    };

    this.contractEncryptService.post(body).subscribe((result) => {
      this.saveContract(payload, result._id, _id);
      const mensagem =
        'Contrato enviado com sucesso! Foi enviado uma mensagem ' +
        'de texto a todas as partes envolvida com a senha de acesso para acompanhamento';
      Swal.fire('Sucesso', mensagem, 'success').then(() => {
        this.goToMyContracts();
      });
    });
  };

  private saveContract(payload: Contract, contractId: any, userId: string) {
    const contract = Object.assign({}, payload);
    contract.title = this.getOnlyText(contract.title);
    contract.description = this.getOnlyText(contract.description);
    contract.id = contractId;
    contract.userId = userId;
    delete contract.blocks;
    this.contractService.createContract(contract);
  }

  private fillModel(modelId) {
    this.model = models.find((mod) => mod.id === +modelId);
  }

  private goToMyContracts() {
    this.router.navigate(['user-shell'], {
      queryParams: { goTo: 'myContracts' },
    });
  }

  private getOnlyText(text: string) {
    const initialIndex = text.indexOf('<strong>');
    const finalIndex = text.indexOf('</strong>');
    return text.substring(initialIndex, finalIndex);
  }
}
