exports.find = function(req, res) {
	res.send('Gello World');
};

exports.create= function(req, res){
	res.send('Add a teacher'); 
};
		
exports.put= function(req, res) {
	res.send('Update a teacher'); 
};
		
exports.delete = function(req,res) {
	res.send('Delete a teacher'); 
};