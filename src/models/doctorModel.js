const mongoose = require('mongooose')
const Schema = mongoose.Schema
const doctorSchema = new Schema({

doctorId:{
    type:String,
    required:true
    },
doctorName:{
    type:String,
    required:true
},
specialization:{
    type:String,
    required:true
},
doctorSalary:{
    type:Number,
    required:false
}
})

const Doctor = mongoose.model('Doctor',doctorSchema)

module.exports = Doctor