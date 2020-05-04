import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContractEncryptService extends BaseService<any> {
  API_URL = 'function/encrypt';
  constructor(http: HttpClient) {
    super(http);
  }
}
