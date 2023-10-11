const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    level: {
        type: Number,
        required : "Le level est requis",
        min : [0, "Le vote doit être supérieur ou égale à 0"],
        max: [5, "Le vote doit être inférieur ou égale à 5"],
        get: v => Math.floor(v),
        set: v => Math.floor(v) 
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