import { Template } from 'meteor/templating';
import { Candidates } from '/imports/api/voting.js';
import { Meteor } from 'meteor/meteor';

import './candidates.html';


Template.candidates.onCreated(() => {
    Meteor.subscribe('candidates');
});

Template.candidates.helpers({
    candidates: function () {
        return Candidates.find().fetch();
    }
});

Template.candidates.events({
    'click .jsVote': (event, instance) => {
        const name = event.target.closest('.jsCandidate').getAttribute('value');
        Meteor.call('voteForCandidate', name);
    }
})