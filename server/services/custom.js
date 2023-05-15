'use strict';

const states = require('../data/state.json');
const districtChunk1 = require('../data/districtChunk1.json');
const districtChunk2 = require('../data/districtChunk2.json');

module.exports = ({strapi}) => ({

    async getDataStatus() {
        const entry = await strapi.db.query('plugin::strapi-indian-states.setting').findOne();
        if (entry) 
            return entry.data;
         else 
            return false;
    },
    async initialData() {

        await strapi.db.query("plugin::strapi-indian-states.state").createMany({data: states.data});
        await strapi.db.query("plugin::strapi-indian-states.district").createMany({data: districtChunk1.data});
        await strapi.db.query("plugin::strapi-indian-states.district").createMany({data: districtChunk2.data});
        await strapi.db.query('plugin::strapi-indian-states.setting').create({
            data: {
                data: true
            }
        });
    },
    async getStates(){
        const states = await strapi.entityService.findMany('plugin::strapi-indian-states.state', {
            fields: ['id', 'state'],
            filters: { status: true },
          });
          return states;
    },
    async getDistricts(state_id){
        const districts = await strapi.entityService.findMany('plugin::strapi-indian-states.district', {
            fields: ['id','state_id', 'district'],
            filters: { state_id: state_id },
          });
          return districts;
    }

});
