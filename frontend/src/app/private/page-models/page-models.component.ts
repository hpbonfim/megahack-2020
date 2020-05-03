import { Component, OnInit } from '@angular/core';
import models from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-models',
  templateUrl: './page-models.component.html',
  styleUrls: ['./page-models.component.scss'],
})
export class PageModelsComponent implements OnInit {
  models = models;
  selectedModel: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToContract = (id) => this.router.navigate([`/user-contract/${id}`]);
}
