const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
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
    guestbookPage: "./pages/Guestbook.js"
  },
  bootstrap: null,
  mocha: {},
  name: 'onboarding_project_test',
  plugins: {
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
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}