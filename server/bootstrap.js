'use strict';

module.exports = async ({ strapi }) => {

    let dataStatus = await strapi.plugin('strapi-indian-states').service('customService').getDataStatus();

    if(!dataStatus){
      strapi.plugin('strapi-indian-states').service('customService').initialData();
    }      
    else
      strapi.log.info('plugin:strapi-indian-states: Data Exists');
  
};
