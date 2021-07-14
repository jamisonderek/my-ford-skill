/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */

// TODO: REPLACE THIS WITH YOUR DOMAIN.
const domain = 'https://api.jamisoncreations.com';

const Alexa = require('ask-sdk-core');
const fetch = require('node-fetch');

const toJson = (res) => res.json();

const dashes = (PascalCased) => PascalCased.replace(/(?!^)([A-Z])/g, '-$1').toLowerCase();

const url = (intent) => `${domain}/my-ford/${dashes(intent)}`;

const message = {
  anythingElse: 'Is there anything else I can help with?',
};

const intents = [
  // Vehicle state changes
  'StartVehicle',
  'LockVehicle',
  'UnlockVehicle',
  'ChargeVehicle',

  // Vehicle information
  'WhereVehicle',
  'CheckFuel',
  'CheckPlug',
  'WhenCharging',
  'GoodNight',
];

const getIntent = (intent, reprompt = false) => {
  const checkStatus = (res, expectedStatusCode = 200) => {
    if (res.status !== expectedStatusCode) {
      throw new Error(`Failed processing ${intent} command. Unexpected ${res && res.status} status code.`);
    }
    return res;
  };

  const intentObject = {
    canHandle(handlerInput) {
      return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
              && Alexa.getIntentName(handlerInput.requestEnvelope) === `${intent}Intent`;
    },
    handle(handlerInput) {
      return fetch(url(intent))
        .then(checkStatus)
        .then(toJson)
        .then(json => `${intent} handler says the message ${json.msg}`)
        .then(output => handlerInput.responseBuilder.speak(output))
        .then(response => (reprompt === true ? response.reprompt(message.anythingElse) : response))
        .then(response => response.getResponse())
        .catch(err => handlerInput.responseBuilder.speak(`Error ${err}`).getResponse());
    },
  };

  return intentObject;
};

exports.networkHandler = [
  ...intents.map(getIntent),
];
