exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.qa-legacy.com/',
      browser: 'chrome'
    },
    PersonHelper: {
      require: './person_helper.js'
    },
    REST: {
      endpoint: 'https://www.qa-legacy.com/us/obituaries/chicagotribune/name/bogus-name-obituary?pid=000000000',
      onRequest: (request) => {
        request.headers.auth = '123';
      }
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai'
    }
  },
  include: {
    I: './steps_file.js',
    guestbookPage: './pages/Guestbook.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './tests/*_test.js',
  name: 'onboarding_project_test'
}