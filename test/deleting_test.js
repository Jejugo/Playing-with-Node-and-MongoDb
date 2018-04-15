const assert = require("assert");
const MarioChar = require("../models/mariochar");


/*describe('Deleting record', function(){

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

	it('Deletes one record from database', function(done){
		MarioChar.findOneAndRemove({name: 'Mario'}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result === null);
				done();
			});
		});
	});

});*/