import Web3 from 'web3';

if (!web3 || web3.eth.accounts.length === 0) {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}
export default web3;