const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Person = mongoose.model('person');

const seperateFormValues = input => {
    let simplifiedObj = {};
    let questions = [];
    let preferences = [];
    Object.keys(input).forEach(key => {
        const value = input[key];
        if (key === 'name') {
            simplifiedObj.name = value;
        }
        if (key[0] === 'Q' && key[7] === 'n') {
            questions.push(value);
        }
        if (key[0] === 'P' && key[9] === 'e') {
            preferences.push(value);
        }
    });
    simplifiedObj.questions = questions;
    simplifiedObj.preferences = preferences;
    return simplifiedObj;
};

module.exports = app => {
    app.post('/api/person', requireLogin, async (req, res) => {
        const { name, questions, preferences } = seperateFormValues(req.body);

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

    app.get('/api/people', requireLogin, async (req, res) => {
        const people = await Person.find({ _user: req.user.id });

        res.send(people);
    });

    app.delete('/api/delete/:personId', requireLogin, async (req, res) => {
        try {
            const removePerson = await Person.remove({
                _id: req.params.personId
            });
            //console.log(removePerson);
            res.json(removePerson);
        } catch (err) {
            res.json({ message: err });
        }
    });

    app.get('/api/find/:personId', requireLogin, async (req, res) => {
        try {
            const person = await Person.find({ _id: req.params.personId });
            res.json(person);
        } catch (err) {
            res.json({ message: err });
        }
    });

    app.patch('/api/edit/:personId', requireLogin, async (req, res) => {
        try {
            const { name, questions, preferences } = seperateFormValues(
                req.body
            );
            const updatedPerson = await Person.updateOne(
                { _id: req.params.personId },
                { $set: { name, questions, preferences, _user: req.user.id } }
            );
            res.json(updatedPerson);
        } catch (err) {
            res.json({ message: err });
        }
    });
};
