	var request = require('supertest'), should = require('should-http');
	describe('student', function(){
		var url ='localhost:5000';
		describe('find()', function(){
			it('should retrieve all student record', function(done){
				request(url)
				.get('/students')
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200); 
					res.body.should.be.an.instanceOf(Array);
					done();
				});	
			});
		});
		describe('find1()', function(){
			it('should retrieve a student record', function(done){
				request(url)
				.get('/students/2013-12345')
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200); 
					res.body.should.be.an.instanceOf(Object);
					done();
				});	
			});
		});
		describe('insert()', function(){
			it('should return a newly created record', function(done){
				request(url)
				.post('/students')
				.send({'studno': '2015-12345' , 'name':'Marie', 'bdate':'1997-11-12'})
				.end(function(err, res){
					if(err) throw err;
					res.should.have.status(200); 
					res.body.should.be.an.instanceOf(Object);
					done();
				});	
			});
		});
	});