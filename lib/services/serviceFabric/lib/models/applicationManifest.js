/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApplicationManifest class.
 * @constructor
 * @member {string} [manifest]
 * 
 */
function ApplicationManifest() {
}

/**
 * Defines the metadata of ApplicationManifest
 *
 * @returns {object} metadata of ApplicationManifest
 *
 */
ApplicationManifest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApplicationManifest',
    type: {
      name: 'Composite',
      className: 'ApplicationManifest',
      modelProperties: {
        manifest: {
          required: false,
          serializedName: 'Manifest',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ApplicationManifest;