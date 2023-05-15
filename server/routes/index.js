module.exports = [
  {
    method: 'GET',
    path: '/getStates',
    handler: 'customController.states',
    config: {
      policies: [],
      auth:false
    },
  },
  {
    method: 'GET',
    path: '/getDistricts/:state',
    handler: 'customController.districts',
    config: {
      policies: [],
      auth:false
    },
  }
];
