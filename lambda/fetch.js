/* eslint-disable linebreak-style */

const https = require('https');

function Fetch(uri) {
  return new Promise((resolve, reject) => {
    let data = '';
    const req = https.get(uri, (res) => {
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve({
          statusCode: 200,
          body: data,
        });
      });
    });
    req.on('error', (e) => {
      let message;
      try {
        message = JSON.stringify(e);
      } catch (er) {
        message = JSON.stringify({ msg: 'An error occurred' });
      }
      reject(new Error(message));
    });
  });
}

exports.Fetch = Fetch;
