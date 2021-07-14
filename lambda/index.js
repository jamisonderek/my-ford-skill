/* eslint-disable linebreak-style */

// This code is based on a sample that demonstrates handling intents from an Alexa skill using the
// Alexa Skills Kit SDK (v2). Please visit https://alexa.design/cookbook for additional examples on
// implementing slots, dialog management, session persistence, api calls, and more.

const Alexa = require('ask-sdk-core');
const fetch = require('node-fetch');

const LaunchRequestHandler = {
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

const StartVehicleIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StartVehicleIntent';
  },
  async handle(handlerInput) {
    let speakOutput;
    try {
      const answer = await fetch('https://postman-echo.com/get?msg=Hello+world!');
      if (answer.status === 200) {
        const json = await answer.json();
        speakOutput = `starting vehicle says message ${json.args.msg}`;
      } else {
        speakOutput = `Error processing starting vehicle command. ${answer && answer.status} status code.`;
      }
    } catch (e) {
      speakOutput = `Error ${e}`;
    }

    return handlerInput.responseBuilder
      .speak(speakOutput)
      // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
      .getResponse();
  },
};

const LockVehicleIntentHandler = {
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

const UnlockVehicleIntentHandler = {
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

const ChargeVehicleIntentHandler = {
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

const WhereVehicleIntentHandler = {
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

const CheckFuelIntentHandler = {
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

const CheckPlugIntentHandler = {
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

const WhenChargingIntentHandler = {
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

const GoodNightIntentHandler = {
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

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'I can lock, unlock, start and charge your vehicle. '
        + 'I can also check fuel level, see current location, check EV plug, '
        + 'and determine when the next charge is. '
        + 'My good night route makes sure you make it to your meeting.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
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

const SessionEndedRequestHandler = {
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
const IntentReflectorHandler = {
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
const ErrorHandler = {
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
    LaunchRequestHandler,

    // Vehicle state changes
    StartVehicleIntentHandler,
    LockVehicleIntentHandler,
    UnlockVehicleIntentHandler,
    ChargeVehicleIntentHandler,

    // Vehicle information
    WhereVehicleIntentHandler,
    CheckFuelIntentHandler,
    CheckPlugIntentHandler,
    WhenChargingIntentHandler, //
    GoodNightIntentHandler,

    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,

    // NOTE: make sure IntentReflectorHandler is last so it doesn't override your
    // custom intent handlers!
    IntentReflectorHandler,
  )
  .addErrorHandlers(
    ErrorHandler,
  )
  .lambda();
