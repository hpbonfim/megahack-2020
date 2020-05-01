import { ErrorHandler } from '@angular/core';

import Swal from 'sweetalert2';

export class HttpErrorHandler implements ErrorHandler {
  handleError(error) {
    const { rejection } = error;
    const handleErrors = [401, 409, 500];

    if (handleErrors.includes(rejection.status)) {
      Swal.fire('Oops...', rejection.error.message, 'error');
      return;
    }

    throw new Error(error);
  }
}
