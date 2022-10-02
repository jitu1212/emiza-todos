var mongoose = require('mongoose');
    Schema = mongoose.Schema;
    
    var taskSchema = new Schema({
    heading: String,
    description: String,
    date:Date,
    status:String,
    userId:String
});

module.exports = mongoose.model("Task", taskSchema);