var db = require(__dirname + '/../lib/mysql'); //imported mysql
	
	exports.find = function(req, res, next){
		console.log(req.ip + "find()");
		db.query('SELECT * FROM student',
			function(err,rows){
				if(err) return next(err)
				res.send(rows);
		});
	};
	
	exports.find1 = function(req, res, next){
		console.log(req.ip + "find1()");
		db.query('SELECT * FROM student WHERE studno=?',
			[req.params.id],
			function(err,rows){
				if(rows.length==0)
				res.status(404).send('Student not found!');
				else res.send(rows[0]);
		});
	};
	
	exports.insert = function(req, res, next){
		db.query('INSERT INTO student VALUES (?,?,?)',[req.body.studno,req.body.name,req.body.bdate],
			function(err,rows){
				if(err) return next(err);
				res.send(rows);
		});
	};
	
	exports.update = function(req, res, next){
		db.query('UPDATE student SET ? WHERE studno=?',
			[req.body,req.params.id],
			function(err,rows){
				if(err) return next(err)
				res.send(rows);
		});
	};
	
	exports.delete = function(req, res, next){
		db.query('DELETE FROM student WHERE studno=?',
			[req.params.id],
			function(err,rows){
				if(rows.length==0)
				res.status(404).send('Student not found!');
				else res.send(rows[0]);
				if(err) return next(err)
				res.send(rows);
		});
	};