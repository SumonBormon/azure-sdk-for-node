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
 * Represents a recommendation rule that the recommendation engine can perform.
 *
 * @extends models['ProxyOnlyResource']
 */
class RecommendationRule extends models['ProxyOnlyResource'] {
  /**
   * Create a RecommendationRule.
   * @member {string} [recommendationName] Unique name of the rule.
   * @member {string} [displayName] UI friendly name of the rule.
   * @member {string} [message] Localized name of the rule (Good for UI).
   * @member {uuid} [recommendationId] Recommendation ID of an associated
   * recommendation object tied to the rule, if exists.
   * If such an object doesn't exist, it is set to null.
   * @member {string} [description] Localized detailed description of the rule.
   * @member {string} [actionName] Name of action that is recommended by this
   * rule in string.
   * @member {string} [level] Level of impact indicating how critical this rule
   * is. Possible values include: 'Critical', 'Warning', 'Information',
   * 'NonUrgentSuggestion'
   * @member {string} [channels] List of available channels that this rule
   * applies. Possible values include: 'Notification', 'Api', 'Email',
   * 'Webhook', 'All'
   * @member {array} [categoryTags] The list of category tags that this
   * recommendation rule belongs to.
   * @member {boolean} [isDynamic] True if this is associated with a
   * dynamically added rule
   * @member {string} [extensionName] Extension name of the portal if exists.
   * Applicable to dynamic rule only.
   * @member {string} [bladeName] Deep link to a blade on the portal.
   * Applicable to dynamic rule only.
   * @member {string} [forwardLink] Forward link to an external document
   * associated with the rule. Applicable to dynamic rule only.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RecommendationRule
   *
   * @returns {object} metadata of RecommendationRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecommendationRule',
      type: {
        name: 'Composite',
        className: 'RecommendationRule',
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
          kind: {
            required: false,
            serializedName: 'kind',
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
          recommendationName: {
            required: false,
            serializedName: 'properties.recommendationName',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'properties.message',
            type: {
              name: 'String'
            }
          },
          recommendationId: {
            required: false,
            serializedName: 'properties.recommendationId',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          actionName: {
            required: false,
            serializedName: 'properties.actionName',
            type: {
              name: 'String'
            }
          },
          level: {
            required: false,
            serializedName: 'properties.level',
            type: {
              name: 'Enum',
              allowedValues: [ 'Critical', 'Warning', 'Information', 'NonUrgentSuggestion' ]
            }
          },
          channels: {
            required: false,
            serializedName: 'properties.channels',
            type: {
              name: 'Enum',
              allowedValues: [ 'Notification', 'Api', 'Email', 'Webhook', 'All' ]
            }
          },
          categoryTags: {
            required: false,
            readOnly: true,
            serializedName: 'properties.categoryTags',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isDynamic: {
            required: false,
            serializedName: 'properties.isDynamic',
            type: {
              name: 'Boolean'
            }
          },
          extensionName: {
            required: false,
            serializedName: 'properties.extensionName',
            type: {
              name: 'String'
            }
          },
          bladeName: {
            required: false,
            serializedName: 'properties.bladeName',
            type: {
              name: 'String'
            }
          },
          forwardLink: {
            required: false,
            serializedName: 'properties.forwardLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecommendationRule;