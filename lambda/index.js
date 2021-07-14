/* eslint-disable linebreak-style */

// This code is based on a sample that demonstrates handling intents from an Alexa skill using the
// Alexa Skills Kit SDK (v2). Please visit https://alexa.design/cookbook for additional examples on
// implementing slots, dialog management, session persistence, api calls, and more.

const Alexa = require('ask-sdk-core');
const { genericHandler } = require('./ask-generic-handler');
const { staticHandler } = require('./ask-static-handler');
const { networkHandler } = require('./ask-network-handler');

// The SkillBuilders acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    // Welcome (App launch without command)
    staticHandler.launchRequestHandler,

    ...networkHandler,

    // Help, Cancel and Session management.
    staticHandler.helpIntentHandler,
    genericHandler.cancelAndStopIntentHandler,
    genericHandler.sessionEndedRequestHandler,

    // NOTE: make sure IntentReflectorHandler is **LAST** in addRequestHandlers.
    genericHandler.intentReflectorHandler,
  )
  .addErrorHandlers(
    // Unexpected errors
    genericHandler.errorHandler,
  )
  .lambda();
