const mongoose=require("mongoose");
const accountschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    accountNumber:{
        type:String,
        required: true,
        unique: true,
    },
    pin:{
        type: String,
        required: true,
    },
    balance:{
        type: Number,
        default: 0,
    },
});
module.exports = mongoose.model("Account",accountschema);