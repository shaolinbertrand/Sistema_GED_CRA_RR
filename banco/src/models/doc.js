const mongoose = require('mongoose');


const DocSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    url:{
        type: String,
        reuired: true,
    },
    namebanco:{
        type:String,
        required: true,
    },
    IdAdm:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        defaut: Date.now,
    }

});
DocSchema.pre('save',function(){
    if (this.url){
        this.url = `http://192.168.0.23:3001/files/${this.namebanco}`;
    }
});


module.exports = mongoose.model('Doc', DocSchema);