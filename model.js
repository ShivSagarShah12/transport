const mongoose=require('mongoose');

//defining schema
const vehicleSchema=mongoose.Schema({
    id:{
        type: Number,
    },
    name:{
        type: String,
    },
    branch:{
        type : String,
    },
    vehicle_no:{
        type : String,
    },
    phone_no:{
        type : Number,
    },
    vehicle_type:{
        type : Number,
    },
    status:{
        type : Number,
    },
    trips:{
        type : String,
    },
    history:{
       type : [String],
    },
    engaged_message:{
        type: String
    }

},{
    timestamps: true
});

module.exports=mongoose.model('Vehicle',vehicleSchema);
