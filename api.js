
define( [ 'jquery' ], function( $ ) {

	function Api() {
		this.baseUrl = 'http://api.ponup.com';
	}

	Api.prototype.getBaseUrl = function() {
		return this.baseUrl;
	};

	Api.prototype.setBaseUrl = function( baseUrl ) {
		this.baseUrl = baseUrl;
	};

	Api.prototype.saveScore = function( gameName, score ) {
		var params = {
			'game_name': gameName,
			'game_level_number': score.game_level_number,
			'player_name': score.player_name,
			'value': score.value
		};
		$.ajax({
			type: 'POST',
			url: this.getBaseUrl() + '/score/add',
			data: params
		});
	};

	Api.prototype.retrieveScores = function( gameName, limit, callback ) {
		var params = {
			'game_name': gameName,
			'limit': limit
		};
		$.ajax({
			url: this.getBaseUrl() + '/score/list',
			data: params,
			success: callback
		});
	};

	return Api;
} );

