import { Schema, model } from 'mongoose';


const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    }
});

export default model('Note', noteSchema);
