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
    email: {
        type: String,
        unique : true,
        required : "L'email est obligatoire",
        validate: {
            validator: function (v) {
              // Expression régulière pour valider une adresse e-mail
              const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
              return regexEmail.test(v);
            },
            message: 'L\'adresse e-mail n\'est pas valide.'
        }
        
    },
    created_at: {
        type : Date,
        default : Date.now
    }
})


module.exports = mongoose.model('Music', musicSchema);