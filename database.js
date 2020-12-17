import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/examen-2")
	.then(() => console.log('DATABASE CONNECTED'))
	.catch(err => console.log(err));
