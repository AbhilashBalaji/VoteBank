if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    var web3 = new Web3(web3.currentProvider);
} else {
    console.log('No Web3 Detected... using HTTP Provider')
    var web3 = new Web3(new Web3.providers.HttpProvider("127.0.0.1:8545"));
}

var aa = new web3.eth.Contract('<VOTER CONTRACT ABI>', '<VOTER CONTRACT ID>');

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