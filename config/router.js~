var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router) {
	router.route('/students')	//for the path of site
		.get(student.find)
		.post(student.insert);
		
	router.route('/teachers')
		.get(teacher.find)
		.post(teacher.create)
		.put(teacher.put)
		.delete(teacher.delete);
		
	router.route('/students/:id')
		.get(student.find1)
		.put(student.update)
		.delete(student.delete);
		
	return router;
};

