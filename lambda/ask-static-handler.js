/* eslint-disable linebreak-style */

const Alexa = require('ask-sdk-core');

// The launch request is used when the application starts without being given any commands.
const launchRequestHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Welcome to My-Ford.  How can I help?';
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

// The help intent is used when the user requests help.  It will tell the user the supported
// commands and then listen for a new command.
const helpIntentHandler = {
  canHandle(handlerInput) {
    return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'I can lock, unlock, start and charge your vehicle. I can also check fuel level, see current location, check EV plug, and determine when the next charge is. My good night routine makes sure you make it to your meeting.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse();
  },
};

exports.staticHandler = {
  launchRequestHandler,
  helpIntentHandler,
};
