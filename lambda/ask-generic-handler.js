/* eslint-disable linebreak-style */

// This code is based on a sample that demonstrates handling intents from an Alexa skill using the
// Alexa Skills Kit SDK (v2). Please visit https://alexa.design/cookbook for additional examples on
// implementing slots, dialog management, session persistence, api calls, and more.

const Alexa = require('ask-sdk-core');

// The cancel and stop intent is used to tell the user goodbye and exit out of the Alexa skill.
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

// The session ended request is used for cleanup.
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

exports.genericHandler = {
  cancelAndStopIntentHandler,
  sessionEndedRequestHandler,
  intentReflectorHandler,
  errorHandler,
};
