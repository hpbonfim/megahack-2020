import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from '../../shared/services/base.service';

@Injectable()
export class UserConfirmationCodeService extends BaseService<any> {
  API_URL = 'function/verify';

  constructor(http: HttpClient) {
    super(http);
  }
}
