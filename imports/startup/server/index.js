import { Meteor } from 'meteor/meteor';
import solc from 'solc';

// Initialize web3 as global object for entire server side
import web3 from '/imports/lib/server/ethereum/web3.js';

import { deployContract, updateCandidates } from './voting.js';

Meteor.startup( () => {

    if (web3.isConnected()) {
        console.log('web3 Connected');

        const contractPromise = new Promise ( (resolve, reject) => {
            deployContract(function (error, contract) {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
        contractPromise.then( () => {
            updateCandidates();
        })
        .catch( (error) => {
            console.log(error);
        });
    } else {
        console.log('web3 Not Connected');
    }
});