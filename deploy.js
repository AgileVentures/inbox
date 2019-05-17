const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'add my mnemonic here',
    'rinkeby.infura.io/v3/a983a321ed6d4653bb8e067ea1ba99ef'
)

const web3 = new Web3(provider)

const deploy = async() => {
    const accounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse.interface)
    .deploy({ data: bytecode, arguments: ['Hi there!']})
    .send({gas: '1000000'} )

    console.log('Contract response to', result.options.address)
}

deploy()