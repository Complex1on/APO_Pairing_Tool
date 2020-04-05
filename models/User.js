const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    numQ: { type: Array, default: [1, 2, 3, 4, 5] },
});

mongoose.model('users', userSchema);
