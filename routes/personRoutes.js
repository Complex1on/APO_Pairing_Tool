const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Person = mongoose.model('person');

module.exports = app => {
    app.post('/api/person', async (req, res) => {
        const { name, questions, preferences } = req.body;

        const person = new Person({
            name,
            questions,
            preferences,
            _user: req.user.id
        });

        try {
            await person.save();
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/test', (req, res) => {
        res.send('hello');
    });
};
