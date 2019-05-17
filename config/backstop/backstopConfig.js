'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios
const basicScenario = {
  label: 'test', // name of the test
  url: 'http://localhost:8080/index.html',
  referenceUrl: 'https://mate-academy.github.io/layout_solutions/snake/',
  readyEvent: '',
  readySelector: '',
  delay: 1000,
  hideSelectors: ['[data-qa-hidden]'],
  removeSelectors: ['[data-qa-remove]'],
  hoverSelector: '',
  clickSelector: '',
  postInteractionWait: 0,
  selectors: '',
  selectorExpansion: true,
  expect: 0,
  misMatchThreshold: 1, // 1% of 100%
  requireSameDimensions: true,
};

module.exports = {
  id: 'test',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
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
      ...basicScenario,
      label: 'entire-document',
      selectors: ['document'],
    },
    // define here scenarios for testing
  ],
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  report: ['browser'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
