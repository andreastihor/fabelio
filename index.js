'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
	host: 'localhost',
  port : 1234,
	routes: {
		cors: {
			origin : ['*'],
			headers: ['Origin', 'X-Requested-With', 'Content-Type', 'token'],
			additionalHeaders: ['access-control-allow-headers', 'token', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID'],
  		additionalExposedHeaders: ['access-control-allow-headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, CORRELATION_ID']
		}
	}
});


// Start the server
const start =  async () => {
	try {

		await server.register(require('./app'));

		await server.start();
	}
	catch (err) {
		console.error(err);
		process.exit(1);
	}

	console.log(`server is running on ${server.info.uri}`);
}

start();
