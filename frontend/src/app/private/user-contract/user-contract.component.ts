import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import models from '../page-models/models';
import serviceContract from 'src/app/shared/component/contract-models/service-contract';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.fillModel(id);
  }

  private fillModel(modelId) {
    this.model = models.find((mod) => mod.id === +modelId);
  }
}
