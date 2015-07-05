var fs = require('fs');
var browserify = require('browserify');
var map = require('through2-map');

var Hapi = require('hapi');

var React = require('react');
require('node-jsx').install();

var DOM = React.DOM;
var div = DOM.div;
var body = DOM.body;
var script = DOM.script;


var BirthdayContentPage = require('../app/components/BirthdayContentPage.jsx');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: (process.argv[2] || 3000)
});

var engine = require('hapijs-react-views')();
server.views({
  defaultExtension: 'jsx',
  engines: {
    jsx: engine, // support for .jsx files
    js: engine // support for .js
  }
});

// write below
var guestList = [];
guestList.push({name: "Daniela Borges", brings: "Champanhe"});
guestList.push({name: "Sérgio Ramos", brings: "Cake"});

server.route({
  method: 'GET',
  path:'/bundle.js',
  handler: function (request, reply) {
    reply(null, browserify('./client/app.js')
    .transform('reactify')
    .bundle().pipe(map({
      objectMode: false
    }, function(chunk) {
      return chunk;
    })));
  }
});

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    var initialData = JSON.stringify(guestList);
    var markup = React.renderToString(React.createElement(BirthdayContentPage, {guestList: guestList}));

    var html = React.renderToStaticMarkup(body(null,
      div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
      script({id: 'initial-data',
        type: 'text/plain',
        'data-json': initialData
      }),
      script({src: '/bundle.js'})
      ));

    reply(html).header('Content-Type', 'text/html');
  }
});

// Start the server
server.start(function(){
  console.info("Server started at", server.info.uri);
});
