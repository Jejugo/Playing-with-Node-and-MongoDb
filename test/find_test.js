const assert = require("assert");
const MarioChar = require("../models/mariochar");


/*describe('Finding records', function(){

	var mario;

	beforeEach(function(done){
		mario = new MarioChar({
			name: 'Mario',
			weight: 70
		});

		//save the object to the database THEN runs the function. Done() to tell it's over
		mario.save().then(function(){
			assert(mario.isNew === false);
			done();
		});
	});

	it('find one record from database', function(done){
		MarioChar.findOne({name: 'Mario'}).then(function(result){
			assert(result.name === 'Mario');
			done();
		});
	});

	it('find one record by ID from database', function(done){
		MarioChar.findOne({_id: mario._id}).then(function(result){
			assert(result._id.toString() === mario._id.toString());
			done();
		});
	});

});*/