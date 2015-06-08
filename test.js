
requirejs.config({
	paths: {
		jquery: 'bower_components/jquery/dist/jquery'
	},
});

require( [ 'api' ], function( PonupApi ) {
	QUnit.test( 'Default API url', function( assert ) {
		var api = new PonupApi();
		assert.ok( 'http://api.ponup.com' === api.getBaseUrl(), 'Default API url matches' );
	});
	QUnit.start();
});

