"use strict";
const { sanitize } = require("@strapi/utils");

module.exports = ({ strapi }) => ({
  async states(ctx) {
    try {
      return await strapi
        .plugin("strapi-indian-states")
        .service("customService")
        .getStates();
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  async districts(ctx) {
    const {state} = ctx.params;
    try {
      return await strapi
        .plugin("strapi-indian-states")
        .service("customService")
        .getDistricts(state);
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
