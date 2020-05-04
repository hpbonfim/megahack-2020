import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContractDecryptService extends BaseService<any> {
  API_URL = 'function/decrypt';
  constructor(http: HttpClient) {
    super(http);
  }
}
