import { Meteor } from 'meteor/meteor';
import { voteForCandidate, updateCandidates } from '/imports/startup/server/voting.js';


    
Meteor.methods({
    voteForCandidate: function (name) {
        voteForCandidate(name);
        updateCandidates();
    }
});
