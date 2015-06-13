
[![Build Status](https://travis-ci.org/Ponup/api-js-client.svg?branch=master)](https://travis-ci.org/Ponup/api-js-client)

# Ponup API Javascript client

Use this tiny library to connect to the Ponup API from your Javascript games.

## Example of usage

``
// Initialize API.
var api = new PonupApi( accountId, apiKey ),
// Retrieve all games on your collection.
	games = api.retrieveGames();

// For each game print the leaderboard.
games.forEach( function( game ) {
	var scores = api.retrieveScores( game.alias, 10, function( scores ) {
		console.dir( scores );
	});
});
``

## Installing dependencies

Assuming you have bower installed with npm.

``
bower install
``

## Running the test suite

``
phantomjs bower_components/qunit-phantomjs-runner/runner.js test.html
``

