import Web3 from 'web3';

// set the provider you want from Web3.providers
if ((new Web3(new Web3.providers.HttpProvider('http://localhost:8546'))).isConnected()) {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8546'));
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}


export default web3;