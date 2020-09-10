var db=require("../models");





exports.getTodos= function(req,res){
	

	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}




exports.createTodo=function(req,res){

	db.Todo.create(req.body)
	.then(function(newTodo){
		res.status(201).json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})

	console.log(req.body);


}


exports.getTodo=function(req,res){

	db.Todo.findById(req.params.todoId)
	.then(function(foundToDo){
		res.json(foundToDo);
	})
	.catch(function(err){
		res.send(err);
	})

}


exports.updateTodo=function(req,res){

	db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new:true})
	.then(function(toDo){
		res.json(toDo);
	})
	.catch(function(err){
		res.send(err);
	})

}


exports.deleteTodo=function(req,res){

	db.Todo.remove({_id:req.params.todoId})
	.then(function(){
		res.json({message:"entry deleted"});
	})
	.catch(function(err){
		res.send(err);
	})

}



module.exports= exports;