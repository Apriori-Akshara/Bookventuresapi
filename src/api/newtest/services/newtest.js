'use strict';

/**
 * newtest service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newtest.newtest');
