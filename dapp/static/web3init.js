var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "hsh",
				"type": "string"
			}
		],
		"name": "addHash",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hsh",
				"type": "string"
			},
			{
				"name": "party",
				"type": "uint256"
			}
		],
		"name": "addVote",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "emitt",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "hsh",
				"type": "string"
			}
		],
		"name": "hashAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "hsh",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "party",
				"type": "uint256"
			}
		],
		"name": "voteAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "testString",
				"type": "string"
			}
		],
		"name": "wee",
		"type": "event"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "hsh",
				"type": "string"
			}
		],
		"name": "getParty",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    var web3 = new Web3(web3.currentProvider);
} else {
    console.log('No Web3 Detected... using HTTP Provider')
    var web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
}

var aa = new web3.eth.Contract(abi, '0x34C2693989C37970D454E190849ec97C16cfcfe2');

async function account(){
	return await web3.eth.getAccounts();
}
account().then(function(acc){
	aa.defaultAccount = acc[0];
})

var Dagger = window.Dagger
dagger = new Dagger('wss://ropsten.dagger.matic.network')
dagger.on("latest:blockk.number", function(result) {
	console.log("New block created: ", result);
  });