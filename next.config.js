const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = {


};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: 'hoangdung',
        MONGODB_PASSWORD: 'WwTfU5iKoaH84rDO',
        MONGODB_CLUSTERNAME: 'cluster0',
        MONGODB_DATABASE: 'messages'
      }
    }
  } 
  
  return {
    env: {
      MONGODB_USERNAME: 'hoangdung',
      MONGODB_PASSWORD: 'WwTfU5iKoaH84rDO',
      MONGODB_CLUSTERNAME: 'cluster0',
      MONGODB_DATABASE: 'messages'
    }
  }

}