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