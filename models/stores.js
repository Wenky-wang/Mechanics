const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email can not be empty"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password cannot be empty"]
    },
    name: {
        type: String,
        required: [true, "account name cannot be empty"]
    },
    phoneNumber: {
        type: String
    },
    supName: {
        type: String
    },
    fax: {
        type: String
    },
    desc: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    province: {
        type: String
    },
    postalCode: {
        type: String
    },
    service: {
        type: Array
    },
    defaultQuota: {
        type: Number
    }
});
  
const Stores = mongoose.model("Stores", storeSchema);
module.exports = Stores;