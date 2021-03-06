/*!
 * Expanse, LLC
 * http://expansellc.io
 *
 * Copyright 2016
 * Released under the Apache 2 license
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * @authors Meghan Erickson
 */
'use strict';

/**
 * Each Authorizer gates a resource group
 * A ResourceGroup is a list of appids used to construct the arns placed in the ApiGateway policy
 * Later these could be ported into JSON files in S3 or stored in an external datastore
 */
class ResourceGroupModule {
  constructor() {
    /**
     * Existing HTTP verbs supported by API Gateway. This property is here
     * only to avoid spelling mistakes in the policy.
     *
     * @property HttpVerb
     * @type {Object}
     */
    this.httpVerb = {
      GET: 'GET',
      POST: 'POST',
      PUT: 'PUT',
      PATCH: 'PATCH',
      HEAD: 'HEAD',
      DELETE: 'DELETE',
      OPTIONS: 'OPTIONS',
      ALL: '*'
    };

    /**
     * For testing, I configured a lamda function
     * named 'backend_mock' which is triggered by
     * the 0h00jda672 api in apigateway
     */
    this.apiIds = [{
      api_name: '0h00jda672',
      description: 'LambdaMicroservice',
      verb: this.httpVerb.GET,
      phase: '*',
      resource: null
    }];
  }
}

module.exports = ResourceGroupModule;
