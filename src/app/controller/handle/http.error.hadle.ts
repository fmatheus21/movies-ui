import { HttpErrorResponse } from "@angular/common/http";

export class HttpErrorHandle {

  public handleError(error: HttpErrorResponse) {
    var result = JSON.parse(JSON.stringify(error));
    var httpError: any = result.error[0];
    return {
      timestamp: httpError.timestamp,
      statusCode: httpError.statusCode,
      statusDescription: httpError.statusDescription,
      cause: httpError.cause,
      message: httpError.message,
    };

  }

}
