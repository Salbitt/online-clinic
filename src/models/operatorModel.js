const mongoose = require('mongoose')
const Schema = mongoose.Schema
const operatorSchema = new Schema({
    operatorId:{
        type:String,
        required:true
    },
    operatorName:{
        type:String,
        required:true
    },
    operatorSalary:{
        type:Number,
        required:true
    }
})

const Operator = mongoose.model('Operator',operatorSchema)

module.exports = Operator