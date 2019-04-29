'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HelloWorldIntent');
    },

    HelloWorldIntent() {
        this.ask('Hello World! What\'s your name?', 'Please tell me your name.');
    },

    MyNameIsIntent() {
        this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
    },

    AccendiLuce() {
        this.tell('Luce accesa')
    },

    SpegniLuce() {
        this.tell('Luce spenta')
    },

    RegolazioneTapparella() {

        // estrai livello richiesto
        console.log('\n\n')
        console.warn(this.$inputs)
        console.log('\n\n')

        // controllo tapparella
        this.tell('Fatto! Attendo nuovi comandi.')
    }
});

module.exports.app = app;
