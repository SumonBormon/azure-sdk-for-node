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
 * a role assignment
 *
 * @extends models['Resource']
 */
class BillingRoleAssignment extends models['Resource'] {
  /**
   * Create a BillingRoleAssignment.
   * @property {string} [createdOn] the date the role assignment is created
   * @property {string} [createdByPrincipalTenantId] the creator's tenant Id
   * @property {string} [createdByPrincipalId] the creator's principal Id
   * @property {string} [billingRoleAssignmentName] the name of the role
   * assignment
   * @property {string} [principalId] The user's principal id that the role
   * gets assigned to
   * @property {string} [roleDefinitionName] The role definition id
   * @property {string} [scope] The scope the role get assigned to
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BillingRoleAssignment
   *
   * @returns {object} metadata of BillingRoleAssignment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingRoleAssignment',
      type: {
        name: 'Composite',
        className: 'BillingRoleAssignment',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          createdOn: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdOn',
            type: {
              name: 'String'
            }
          },
          createdByPrincipalTenantId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdByPrincipalTenantId',
            type: {
              name: 'String'
            }
          },
          createdByPrincipalId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdByPrincipalId',
            type: {
              name: 'String'
            }
          },
          billingRoleAssignmentName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.principalId',
            type: {
              name: 'String'
            }
          },
          roleDefinitionName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.roleDefinitionName',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            readOnly: true,
            serializedName: 'properties.scope',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingRoleAssignment;