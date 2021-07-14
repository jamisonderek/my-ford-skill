/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
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

exports.networkHandler = {
  startVehicleIntentHandler,
  lockVehicleIntentHandler,
  unlockVehicleIntentHandler,
  chargeVehicleIntentHandler,
  whereVehicleIntentHandler,
  checkFuelIntentHandler,
  checkPlugIntentHandler,
  whenChargingIntentHandler,
  goodNightIntentHandler,
};
