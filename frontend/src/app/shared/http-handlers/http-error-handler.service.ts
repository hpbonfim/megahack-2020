import { ErrorHandler } from '@angular/core';

import Swal from 'sweetalert2';

export class HttpErrorHandler implements ErrorHandler {
  handleError(error) {
    const { rejection } = error;
    const handleErrors = [401, 404, 409, 500];

    if (rejection && handleErrors.includes(rejection.status)) {
      const message =
        (rejection.error || {}).message ||
        'Houve um erro, já estamos trabalhando nisso.';
      Swal.fire('Oops...', message, 'error');
      return;
    }

    throw new Error(error);
  }
}
