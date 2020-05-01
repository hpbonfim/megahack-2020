import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class UserConfirmationSmsService extends BaseService<any> {
  API_URL = 'function/send';

  constructor(http: HttpClient) {
    super(http);
  }
}
