const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let musicSchema = new Schema({
    url: {
        type: String,
        required : "L'url est requis"
    },
    lastname: {
        type: String,
        required : "Le nom est requis"
    },
    firstname: {
        type: String,
        required : "Le prénomnom est requis"
    },
    created_at: {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Music', musicSchema);