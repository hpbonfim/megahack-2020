import { Injectable } from '@angular/core';

import { BaseService } from '../shared/services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserConfirmationService extends BaseService<any> {
  API_URL = 'user/send';

  constructor(http: HttpClient) {
    super(http);
  }
}
