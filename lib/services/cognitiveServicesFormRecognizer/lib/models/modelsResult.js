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
 * Result of query operation to fetch multiple models.
 *
 */
class ModelsResult {
  /**
   * Create a ModelsResult.
   * @property {array} [modelsProperty] Collection of models.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ModelsResult
   *
   * @returns {object} metadata of ModelsResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ModelsResult',
      type: {
        name: 'Composite',
        className: 'ModelsResult',
        modelProperties: {
          modelsProperty: {
            required: false,
            serializedName: 'models',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ModelResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'ModelResult'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ModelsResult;