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
				.send({'studno': '2010-12345' , 'name':'Miggy', 'bdate':'1996-12-12'})
				.end(function(err, res){
					if(err) throw err;
						var should = require('should');
						('studno').should.be.type('string');
						('studno' == '2010-12345').should.be.ok;
						('name').should.be.type('string');
						('name' == 'Miggy').should.be.ok;
						('bdate').should.be.type('string');
						('bdate' == '1996-12-12').should.be.ok;
					res.should.have.status(200); 
					res.body.should.be.an.instanceOf(Object);
					done();
				});	
			});
		});
	});