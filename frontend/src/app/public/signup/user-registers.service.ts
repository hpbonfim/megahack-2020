import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class UserRegistersService extends BaseService<any> {
  API_URL = 'user/register';

  constructor(http: HttpClient) {
    super(http);
  }
}
