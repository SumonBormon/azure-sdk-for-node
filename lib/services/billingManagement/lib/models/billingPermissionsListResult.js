/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Result of list billingPermissions a caller has on a billing account.
 *
 */
class BillingPermissionsListResult {
  /**
   * Create a BillingPermissionsListResult.
   * @property {array} [value] The list OF billingPermissions a caller has on a
   * billing account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingPermissionsListResult
   *
   * @returns {object} metadata of BillingPermissionsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingPermissionsListResult',
      type: {
        name: 'Composite',
        className: 'BillingPermissionsListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BillingPermissionsPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'BillingPermissionsProperties'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = BillingPermissionsListResult;