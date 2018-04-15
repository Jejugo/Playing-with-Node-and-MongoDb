const assert = require("assert");
const MarioChar = require("../models/mariochar");


describe('Updating records', function(){

	var mario;
	var pitty;

	beforeEach(function(done){
		mario = new MarioChar({
			name: 'Mario',
			weight: 70
		});

		pitty = new MarioChar({
			name: 'Pitty',
			weight: 60
		});

		//save the object to the database THEN runs the function. Done() to tell it's over
		mario.save().then(function(){
			pitty.save().then(function(){
				done();
			});
		});

		
	});

	it('Updates one record from database', function(done){
		MarioChar.findOneAndUpdate({name: 'Mario'},{name: 'Luigi'}).then(function(){
			MarioChar.findOne({_id: mario._id}).then(function(result){
				assert(result.name === 'Luigi');
				done();
			})
		});
	});

	/*it('Increments the weight by 1', function(done){
		MarioChar.update({},{$inc: {weight: 1}}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(record){
				assert(record.weight === 71);
				done();
			});
		});
	});*/
});