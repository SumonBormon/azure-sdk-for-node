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
 * Details about the participant or signer.
 *
 */
class Participants {
  /**
   * Create a Participants.
   * @property {string} [status] The signing status
   * @property {date} [statusDate] The date when status got changed.
   * @property {string} [email] The email address of the participant or signer.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Participants
   *
   * @returns {object} metadata of Participants
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Participants',
      type: {
        name: 'Composite',
        className: 'Participants',
        modelProperties: {
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          statusDate: {
            required: false,
            readOnly: true,
            serializedName: 'statusDate',
            type: {
              name: 'DateTime'
            }
          },
          email: {
            required: false,
            readOnly: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Participants;