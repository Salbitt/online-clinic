const mongoose = require('mongoose')
const Schema = mongoose.Schema


const patientSchema = new Schema({
    patientId:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        required:true
    },
    appointmentsPending:{
        type:Number,
        required:true
    },
    paymentsPending:{
        type:Number,
        required:true
    }
})

const Patient = mongoose.model('Patient',patientSchema)

module.exports = Patient

