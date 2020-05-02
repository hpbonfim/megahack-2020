import { Component, OnInit } from '@angular/core';
import models from './models';

@Component({
  selector: 'app-page-models',
  templateUrl: './page-models.component.html',
  styleUrls: ['./page-models.component.scss'],
})
export class PageModelsComponent implements OnInit {
  models = models;
  selectedModel: number;

  constructor() {}

  ngOnInit(): void {}
}
