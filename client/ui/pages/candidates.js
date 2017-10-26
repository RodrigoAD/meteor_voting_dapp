import { Template } from 'meteor/templating';
import { PersistentMinimongo2 } from 'meteor/frozeman:persistent-minimongo2';
// import { Candidates } from '/imports/api/voting.js';
import { Meteor } from 'meteor/meteor';

import './candidates.html';

const candidates = new Meteor.Collection('Candidates', { connection: null });
const candidatesObserver = new PersistentMinimongo2(candidates, 'example');

Template.candidates.onCreated(() => {
    // Meteor.subscribe('candidates');
});

Template.candidates.helpers({
    candidates: function () {
        return [{
            name: 'Jimi',
            votes: 0
        }, {
            name: 'James',
            votes: 0
        }, {
            name: 'Dave',
            votes: 0
        }]
        // return Candidates.find().fetch();
    },
    hola: function () {
        return candidates.find().fetch();
    }
});

Template.candidates.events({
    'click .jsVote': (event, instance) => {
        const name = event.target.closest('.jsCandidate').getAttribute('value');
        candidates.insert({ name: 'RODRIGO '});
        console.log(candidates.find().fetch())
        // Meteor.call('voteForCandidate', name);
    }
})