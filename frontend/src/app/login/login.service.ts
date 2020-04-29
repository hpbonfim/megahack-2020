import { Injectable } from '@angular/core';

import { BaseService } from '../shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService extends BaseService<any> {
  API_URL = 'user/login';

  constructor(http: HttpClient) {
    super(http);
  }
}
