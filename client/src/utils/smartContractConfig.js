import abi from './Transactions.json'

const contractAbi=abi.abi;

const contractAddress=process.env.REACT_APP_CONTRACT_KEY
const ContractConfig={address:contractAddress, abi:contractAbi}

export  default ContractConfig