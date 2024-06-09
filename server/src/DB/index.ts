import mongoose from 'mongoose';

// Connect to the database
mongoose.connect('mongodb://localhost:27017/note-app').then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log('Error in connecting to the database', error);
});
