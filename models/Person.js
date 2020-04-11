const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    name: String,
    questions: [Number],
    preferences: [Number],
    type: String,
    weighted: [Number],
    _user: { type: Schema.Types.ObjectId, ref: 'User ' },
});

mongoose.model('person', personSchema);
