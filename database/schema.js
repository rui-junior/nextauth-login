import mongoose from 'mongoose';

const Schema = new mongoose.Schema({

    usuario: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    
})

export default mongoose.models.loginusers || mongoose.model('loginusers', Schema)