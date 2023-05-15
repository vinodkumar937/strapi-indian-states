'use strict';

const stateSchema = require('./state/schema.json');
const districtSchema = require('./district/schema.json');
const settingSchema = require('./setting/schema.json');

module.exports = {
    state:{
        schema:stateSchema
    },
    district:{
        schema:districtSchema
    },
    setting:{
        schema:settingSchema
    }
};
