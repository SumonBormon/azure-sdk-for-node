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
 * Recognized numeric field value.
 *
 * @extends models['FieldValue']
 */
class NumberValue extends models['FieldValue'] {
  /**
   * Create a NumberValue.
   * @property {number} [value] Numeric value of the recognized field.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NumberValue
   *
   * @returns {object} metadata of NumberValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'numberValue',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'valueType',
          clientName: 'valueType'
        },
        uberParent: 'FieldValue',
        className: 'NumberValue',
        modelProperties: {
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          elements: {
            required: false,
            serializedName: 'elements',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ElementReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ElementReference'
                  }
              }
            }
          },
          valueType: {
            required: true,
            serializedName: 'valueType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = NumberValue;