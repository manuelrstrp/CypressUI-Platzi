const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ]
  },
  e2e: {
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{//Linea para herramienta de debbug
        log(message){
         console.log('--** MENSAJE DEL CONSOLE LOG DEL TASK **-- ' + message)
         return null
        } 
      })
    },
    viewportWidth: 1500,
    viewportHeight: 900,
    baseUrl: "https://demoqa.com/",
    // pageLoadTimeout: 120000,
    testIsolation: false,
  },
});
