/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */

// This code is based on a sample that demonstrates handling intents from an Alexa skill using the
// Alexa Skills Kit SDK (v2). Please visit https://alexa.design/cookbook for additional examples on
// implementing slots, dialog management, session persistence, api calls, and more.

const Alexa = require('ask-sdk-core');
const fetch = require('node-fetch');

const checkStatus = (res, expectedStatusCode = 200) => {
  if (res.status !== expectedStatusCode) {
    throw new Error(`Failed processing starting vehicle command. Unexpected ${res && res.status} status code.`);
  }
  return res;
};

const toJson = (res) => res.json();

const messageAnythingElse = 'Is there anything else I can help with?';

const launchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Welcome to MyFord.  How can I help?';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const startVehicleIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StartVehicleIntent';
  },
  handle(handlerInput) {
    return fetch('https://postman-echo.com/get?msg=Hello+world!')
      .then(checkStatus)
      .then(toJson)
      .then(json => `starting vehicle got 200 and says the message ${json.args.msg}`)
      .then(output => handlerInput.responseBuilder.speak(output))
      .then(response => response.reprompt(messageAnythingElse).getResponse())
      .catch(err => handlerInput.responseBuilder.speak(`Error ${err}`).getResponse());
  },
};

const lockVehicleIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LockVehicleIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for locking the vehicle has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const unlockVehicleIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'UnlockVehicleIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for unlocking the vehicle has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const chargeVehicleIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ChargeVehicleIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for charging the vehicle has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const whereVehicleIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'WhereVehicleIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for determining location has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const checkFuelIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CheckFuelIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for checking distance to empty has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const checkPlugIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CheckPlugIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for checking if E.V. is plugged in has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const whenChargingIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'WhenChargingIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for getting next E.V. charge schedule not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const goodNightIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GoodNightIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'FordConnect API for checking E.V. and fuel status in has not been implemented.';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const helpIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'I can lock, unlock, start and charge your vehicle. '
        + 'I can also check fuel level, see current location, check EV plug, '
        + 'and determine when the next charge is. '
        + 'My good night routine makes sure you make it to your meeting.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const cancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speakOutput = 'Goodbye!';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const sessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    // Any cleanup logic goes here.
    return handlerInput.responseBuilder.getResponse();
  },
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const intentReflectorHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
  },
  handle(handlerInput) {
    const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
    const speakOutput = `You just triggered ${intentName}`;

    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const errorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    // eslint-disable-next-line no-console
    console.log(`~~~~ Error handled: ${error.stack}`);
    const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    launchRequestHandler,

    // Vehicle state changes
    startVehicleIntentHandler,
    lockVehicleIntentHandler,
    unlockVehicleIntentHandler,
    chargeVehicleIntentHandler,

    // Vehicle information
    whereVehicleIntentHandler,
    checkFuelIntentHandler,
    checkPlugIntentHandler,
    whenChargingIntentHandler,
    goodNightIntentHandler,

    helpIntentHandler,
    cancelAndStopIntentHandler,
    sessionEndedRequestHandler,

    // NOTE: make sure IntentReflectorHandler is last so it doesn't override your
    // custom intent handlers!
    intentReflectorHandler,
  )
  .addErrorHandlers(
    errorHandler,
  )
  .lambda();
