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

const models = require('./index');

/**
 * The list of blob containers.
 *
 */
class ListContainerItems {
  /**
   * Create a ListContainerItems.
   * @member {array} [value] The list of blob containers.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListContainerItems
   *
   * @returns {object} metadata of ListContainerItems
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListContainerItems',
      type: {
        name: 'Composite',
        className: 'ListContainerItems',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ListContainerItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'ListContainerItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ListContainerItems;