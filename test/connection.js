const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to database before tests run
before(function(done){
	//Connect to MongoDb
	mongoose.connect('mongodb://localhost/database');
		mongoose.connection.once('open', function(){
			console.log("Connection has beem made, now make fireworks!");
			done();
		}).on('error', function(error){
			console.log("Connection error: ", error);
		});
});

//Drop the characters collections before each test
beforeEach(function(done){
	//Drop the collections
	mongoose.connection.collections.mariochars.drop(function(){
		done();
	});
});


