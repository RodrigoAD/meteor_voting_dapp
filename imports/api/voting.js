import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Candidates = new Mongo.Collection('Candidates');

if (Meteor.isServer) {
    Meteor.publish('candidates', () => Candidates.find({}) );
}

