// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/meorphis-test-31/core';
import { APIResource } from '@stainless-temp/meorphis-test-31/resource';
import * as StatusAPI from '@stainless-temp/meorphis-test-31/resources/status';

export class Status extends APIResource {
  /**
   * API status check
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusRetrieveResponse {
  message?: string;
}

export namespace Status {
  export import StatusRetrieveResponse = StatusAPI.StatusRetrieveResponse;
}
