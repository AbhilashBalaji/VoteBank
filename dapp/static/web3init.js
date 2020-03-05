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
				"type": "uint8"
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
				"name": "partyID",
				"type": "uint256"
			},
			{
				"name": "partyAddr",
				"type": "address"
			}
		],
		"name": "addPartyMap",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "partyID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "partyAddr",
				"type": "address"
			}
		],
		"name": "partyAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"name": "_token",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "hshVoterID",
				"type": "string"
			},
			{
				"name": "partyID",
				"type": "uint256"
			}
		],
		"name": "Vote",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "hshVoterID",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "partyID",
				"type": "uint256"
			}
		],
		"name": "voterAdded",
		"type": "event"
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
	}
]

if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    var web3 = new Web3(web3.currentProvider);
} else {
    console.log('No Web3 Detected... using HTTP Provider')
    var web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
}

var aa = new web3.eth.Contract(abi, '0x598F96E50C586F4B0C2Ab25C71F3031B2A2fF3d4');

async function account(){
	return await web3.eth.getAccounts();
}
account().then(function(acc){
	aa.defaultAccount = acc[0];
})

// var Dagger = window.Dagger
// dagger = new Dagger('wss://ropsten.dagger.matic.network')
// dagger.on("latest:blockk.number", function(result) {
// 	console.log("New block created: ", result);
//   });