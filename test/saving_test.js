const assert = require("assert");
const MarioChar = require("../models/mariochar");

describe('Saving records', function(){

	it('Saves a record to the database', function(done){
		var mario = new MarioChar({
			name: 'Mario',
			weight: 70
		});

		//save the object to the database THEN runs the function. Done() to tell it's over
		mario.save().then(function(){
			assert(mario.isNew === false);
			done();
		});
	});
});