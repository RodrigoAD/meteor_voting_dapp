import solc from 'solc';

import { Candidates } from '/imports/api/voting.js';
import web3 from '/imports/lib/server/ethereum/web3.js';

const account =  web3.eth.accounts[0];
const allNames = ['Jimi', 'James', 'Dave'];
let contractInstance;

export function deployContract (callback) {
    const contract = Assets.getText('contracts/Voting.sol');
    const compiledCode = solc.compile(contract);
    
    const abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface);
    const VotingContract = web3.eth.contract(abiDefinition);
    
    const byteCode = compiledCode.contracts[':Voting'].bytecode;

    VotingContract.new(allNames, { data: byteCode, from: account, gas: 4700000 }, function (error, myContract) {
        if (error) callback(error, null);
        else {
            const contractAddress = myContract.address;
            if (contractAddress) {
                contractInstance = VotingContract.at(contractAddress);
                callback(error, contractInstance)
            }
        }
    });
}

export function updateCandidates () {
    allNames.forEach(function (name, index) {
        const votes = contractInstance.totalVotesFor.call(name).toLocaleString();
        Candidates.upsert({ name: name }, { $set: { name, votes } });
    });
};

export function voteForCandidate (name) {
    contractInstance.voteForCandidate(name, { from: account });
}
