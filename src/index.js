import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles
import './index.css';
// Leonardo-UI styles. See: https://github.com/qlik-oss/leonardo-ui
//import '../node_modules/leonardo-ui/dist/leonardo-ui.css';
//import '../node_modules/leonardo-ui/dist/leonardo-ui.js';

// In production, we register a service worker to serve assets from local cache.
import registerServiceWorker from './registerServiceWorker';

var enigma = require("enigma.js");
var qixSchema = require("enigma.js/schemas/12.20.0.json");

// As example, we'll add a connection to localhost.
var config = {
    schema: qixSchema,
    url: "ws://localhost:4848/app/engineData",
};

// Create a QIX session & open the Qlik App.
var session = enigma.create(config);
session.open().then(function(global) {
    return global.openDoc("Consumer Sales.qvf");
}).then(function(app) {
    // Pass the Qlik's app object to the App component
    ReactDOM.render(<App engine={app}/>, document.getElementById('root'));
    registerServiceWorker();
});
