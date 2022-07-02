const ToDo = require('../model/ToDoList')


exports.getTODO = async( req, res) =>{

    try{
    let todo = await ToDo.find()
    if (todo.length == 0){
        res.status(202).json({
            message:"TODO not found"
        })
    }
    else{
    res.status(200).json({
        message: "All TODOS FOUND",
        todo
    })}

    }
    catch (err){
        res.status(500).json({message: err});

    }
}



exports.createToDo = async(req, res) =>{
    try{
        let todo = await req.body
        let todoCreated = await ToDo.create(todo)
        if(todoCreated){
            res.status(200).json({message:"TODO Sucessfully created",
            todo: todoCreated,
        })
            
        }else{
            res.status(500).json({
                message: "TODO Creation Failed"
            })
        }
}
catch(err){
    res.status(501).json({message: err.message});
}
}

exports.getATodo = async(req,res) =>{
    try{
        let id = {_id: req.params.id}
        let todo = await ToDo.findOne(id)
        if (!todo){
            res.status(202).json({
                message:"TODO not found"
            })
        }
        else{
        res.status(200).json({
            message: "TODO FOUND",
            todo
        })}
    }
    catch(err){
        res.status(501).json({message: err.message});
    }
}

exports.updateToDo = async(req,res) =>{
    try{
         let id = {_id: req.params.id}
         let todo = req.body
        let update = await ToDo.findOneAndUpdate(id,todo,{new: true});
        if (!update){
            res.status(400).json({
                message:"TODO not updated"
            })
        }
        else{
        res.status(200).json({
            message: "TODO updated",
            todo:  update
        })}
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.deleteToDo = async(req,res) =>{
    try {
        let id = {_id: req.params.id}
        let todo = await ToDo.findOneAndDelete(id)
        if (!todo){
            res.status(202).json({
                message:"TODO not deleted"
            })
        }
        else{
        res.status(200).json({
            message: "TODO successfully deleted",
            todo
        })}
    } catch (error) {
        res.status(501).json({message: err.message});
    }
}