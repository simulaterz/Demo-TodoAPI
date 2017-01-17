const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '587dcf3b5e251cf4effb40f2'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('587dce6c5e251cf4effb40bb').then((todos) => {
    console.log(todos);
});