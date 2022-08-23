'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/snake/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  viewports: [
    {
      name: '4096',
      width: 4096,
      height: 3112,
    },
    {
      name: '1200',
      width: 1200,
      height: 200,
    },
    {
      name: '1050',
      width: 1050,
      height: 200,
    },
    {
      name: '900',
      width: 900,
      height: 200,
    },
    {
      name: '750',
      width: 750,
      height: 200,
    },
    {
      name: '600',
      width: 600,
      height: 200,
    },
    {
      name: '450',
      width: 450,
      height: 200,
    },
    {
      name: '300',
      width: 300,
      height: 200,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
  ],
};

module.exports = config;
