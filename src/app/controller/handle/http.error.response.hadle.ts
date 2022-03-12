import { HttpErrorResponse } from "@angular/common/http";

export class HttpErrorResponseHandle {

  public handleError(error: HttpErrorResponse) {
    var httpError = JSON.parse(JSON.stringify(error));
    return {
      name: httpError.name,
      status: httpError.status,
      error: httpError.error.error,
      error_description: httpError.error.error_description,
    };

  }

}
