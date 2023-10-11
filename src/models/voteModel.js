const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    level: {
        type: Number,
        required : "Le level est requis"
    },
    music_id:{
        type: String
    },
    created_at: {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Vote', voteSchema);