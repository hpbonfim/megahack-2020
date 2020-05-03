import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import models from '../page-models/models';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-contract',
  templateUrl: './user-contract.component.html',
  styleUrls: ['./user-contract.component.scss'],
})
export class UserContractComponent implements OnInit {
  model: { title: string; description: string };
  models = models;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.fillModel(id);
    this.loadContract();
  }

  private fillModel(modelId) {
    this.model = models.find((mod) => mod.id === +modelId);
  }

  private async loadContract() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      }),
    };
    const stringContract = await this.httpClient
      .get('http://dontpad.com/mideal', httpOptions)
      .toPromise();

    console.log(stringContract);
  }
}
