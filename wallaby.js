module.exports = function (w) {
  return {
    autoDetect: true,
    files: [
      { pattern: 'src/**/*.ts'},
      { pattern: 'src/**/*.test.ts', ignore: true},
      { pattern: 'src/**/*.spec.ts', ignore: true}
    ],
    tests: [
      'src/**/*.test.ts',
      'src/**/*.spec.ts',
    ],

    workers: {
      restart: true // Restart a new process for each subsequent test run
    },
    compilers: {
      '**/*.ts?(x)': w.compilers.typeScript({ isolatedModules: true,  useStandardDefaults: true  })
    }
  };
};