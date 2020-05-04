import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

import models from '../page-models/models';
import serviceContract from 'src/app/shared/component/contract-models/service-contract';
import { ContractEncryptService } from './contract-encrypt.service';
import { ContractService } from 'src/app/shared/services/contract.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-user-contract',
  templateUrl: './user-contract.component.html',
  styleUrls: ['./user-contract.component.scss'],
})
export class UserContractComponent implements OnInit {
  model: { title: string; description: string };
  models = models;
  contract = serviceContract;
  filledContract: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contractService: ContractService,
    private contractEncryptService: ContractEncryptService,
    private userDataService: UserDataService
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
      phoneNumber: `${countryCode}${stateCode}${phoneNumber}`,
    };

    this.contractEncryptService.post(body).subscribe(() => {
      const contract = Object.assign({}, payload);
      contract.userId = _id;
      delete contract.blocks;
      this.contractService.createContract(contract);
      const mensagem =
        'Contrato enviado com sucesso! Foi enviado uma mensagem ' +
        'de texto a todas as partes envolvida com a senha de acesso para acompanhamento';
      Swal.fire('Sucesso', mensagem, 'success').then(
        () => this.goToMyContracts
      );
    });
  };

  private fillModel(modelId) {
    this.model = models.find((mod) => mod.id === +modelId);
  }

  private goToMyContracts() {
    // this.router.navigate(['my-contracts']);
    console.log('vai pra pag de meus contratos');
  }
}
