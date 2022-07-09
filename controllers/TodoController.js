let Todo = require('../models/TodoModel');

exports.getTodo = async(req, res) => {
        const allTodo = await Todo.find();
        res.render("index", {todo: allTodo})
}

exports.createTodo = (req, res) => {
        const { title,description } = req.body;
        const newTodo = new Todo({ title,description });
    
        // save the todo
        newTodo
          .save()
          .then(() => {
            console.log("Successfully added todo!");
            res.redirect("/");
          })
          .catch((err) => console.log(err));
}

exports.deleteTodo = (req, res) => {
        const { _id } = req.params;
        Todo.deleteOne({ _id })
          .then(() => {
            console.log("Deleted Todo Successfully!");
            res.redirect("/");
          })
          .catch((err) => console.log(err));
}

exports.updateTodo = (req,res) => {
    const { _id } = req.params;
    Todo.updateOne({ _id },{title:title, description:description})
    .then(() => {
        console.log("Updated Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));

}