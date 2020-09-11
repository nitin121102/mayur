
exports.config = {
  allScriptsTimeout: 500000,
  capabilities: {
    'browserName': 'chrome'
  },
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login-bap.component.spec.ts'],
  useAllAngular2AppRoots: true,
  directConnect: true,
  framework: 'jasmine'
};

