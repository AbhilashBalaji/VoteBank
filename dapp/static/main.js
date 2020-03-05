if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    var web3 = new Web3(web3.currentProvider);
} else {
    console.log('No Web3 Detected... using HTTP Provider')
    var web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
}var abi = [
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
]

var aa = new web3.eth.Contract(abi, '0xE5de85c2853074Aa257b8219415BdaAD4bE8d483');
aa.events.voteAdded({
        fromBlock: 0
    }, function(error, event){ console.log(event,error); })
    .on('data', function(event){
        console.log(event); // same results as the optional callback above
    })
    .on('changed', function(event){
        // remove event from local database
    })
    .on('error', console.error);
async function addHash() {
	const result = await aa.methods.addHash('alok').send({ from:'0x4aE6d2A17C71018DC980177738fbB2f6f3B74470'})
    console.log(result)
}
addHash();
async function vote() {
	const result = await aa.methods.addVote('alok', 2).send({ from:'0x4aE6d2A17C71018DC980177738fbB2f6f3B74470'})
    console.log(result)
}
// vote();

