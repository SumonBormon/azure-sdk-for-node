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
 * The parameters for updating a token.
 *
 */
class TokenUpdateParameters {
  /**
   * Create a TokenUpdateParameters.
   * @property {string} [scopeMapId] The resource ID of the scope map to which
   * the token will be associated with.
   * @property {string} [status] The status of the token example enabled or
   * disabled. Possible values include: 'enabled', 'disabled'
   * @property {object} [credentials] The credentials that can be used for
   * authenticating the token.
   * @property {array} [credentials.certificates]
   * @property {array} [credentials.passwords]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TokenUpdateParameters
   *
   * @returns {object} metadata of TokenUpdateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TokenUpdateParameters',
      type: {
        name: 'Composite',
        className: 'TokenUpdateParameters',
        modelProperties: {
          scopeMapId: {
            required: false,
            serializedName: 'properties.scopeMapId',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          credentials: {
            required: false,
            serializedName: 'properties.credentials',
            type: {
              name: 'Composite',
              className: 'TokenCredentialsProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = TokenUpdateParameters;