/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */

// TODO: REPLACE THIS WITH YOUR DOMAIN.
const domain = 'https://api.jamisoncreations.com';

const Alexa = require('ask-sdk-core');
const fetch = require('node-fetch');

// Converts a fetched response object into a JSON object.
const toJson = (res) => res.json();

// Converts a PascalCased string into a dashed lowercase string.
// For example, the text "HelloWorld" becomes "hello-world".
const dashes = (PascalCased) => PascalCased.replace(/(?!^)([A-Z])/g, '-$1').toLowerCase();

// Creates a url for the desired intent.
const url = (intent) => `${domain}/my-ford/${dashes(intent)}`;

const message = {
  anythingElse: 'Is there anything else I can help with?',
};

// The order of these intents matter.  The first matching intent will be used.
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

const getIntent = (intent) => {
  // If reprompt is set to true then the user will be given a reprompt message.
  const reprompt = false;

  // Checks to see if the call to the my-ford service is considered successful.
  const checkStatus = (res, expectedStatusCode = 200) => {
    if (res.status !== expectedStatusCode) {
      throw new Error(`Failed processing ${intent} command. Unexpected ${res && res.status} status code.`);
    }
    return res;
  };

  // Creates an intent object that will invoke the my-ford service and return the response.
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
