// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest31 from '@stainless-temp/meorphis-test-31';
import { Response } from 'node-fetch';

const meorphisTest31 = new MeorphisTest31({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource creditConfiguration', () => {
  test('retrieve', async () => {
    const responsePromise = meorphisTest31.accounts.creditConfiguration.retrieve(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest31.accounts.creditConfiguration.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(MeorphisTest31.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = meorphisTest31.accounts.creditConfiguration.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest31.accounts.creditConfiguration.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(MeorphisTest31.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest31.accounts.creditConfiguration.update(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        {
          billing_period: 0,
          credit_limit: 0,
          external_bank_account_token: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          payment_period: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(MeorphisTest31.NotFoundError);
  });
});
