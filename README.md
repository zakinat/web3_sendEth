# web3_sendEth

A React  Front-End-stack app for sending ETH throw blockchain (testing network).

# DEMO
(https://upbeat-kilby-7baa4c.netlify.app/)
## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [ethers](https://docs.ethers.io/v5/) - The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.
- [react-icons](https://react-icons.github.io/react-icons/) - Include popular icons in your React projects easily with react-icons,




#### Smart-Contract

- [hardhat](https://hardhat.org/) - Ethereum development environment for professionals
- [ethers](https://docs.ethers.io/v5/) - The ethers.js library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

## Features
connect your wallet fron the Ropsten test network and sent ETH across the network easily



## Usage


#### Env variable:

Create a .env file in ../client directory and add the following:

```
REACT_APP_CONTRACT_KEY= your contract's key address something like this "0xAc...."
REACT_APP_GIPHY_KEY= your key to the https://developers.giphy.com after creating an app to load a gif    "rZ..."

```
Create a .env file in ../smart_contract directory and add the following:

```
NETWORK_URL_HTTP=your app url from the site https://www.alchemy.com after creating an app on your testing network and it should look like something like "https://eth-ropsten.alchemyapi.io/v2/nf..."
PRIVATE_KEY= your privet key of testing wallet something like this  "58....."  P.s don't use your main private key wallet on testing networks use only burned walltes

```


#### Client:




```
cd client
npm install
npm start
```
#### Smart contract:



```
cd smart_contract
npm install
npm run deploy:ropsten
```
