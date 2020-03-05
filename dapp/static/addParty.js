// aa.events.partyAdded({
//     fromBlock: 0
// }, function(error, event){ console.log(event,error);})

// aa.events.wee({
//     fromBlock: 'latest'
// }, function(error, event){
//     console.log(event.returnValues.testString)
// })

async function addParty(partyID, addr) {
    return await aa.methods.addPartyMap(partyID, addr).send({from:aa.defaultAccount})
}

async function emitt() {
    return await aa.methods.emitt().send({from:aa.defaultAccount})
}

var p = document.getElementById('addParty');
p.addEventListener('click', function(){
    var addr = document.getElementById('addr').value;
    var party_id = document.getElementById('party_id').value;
	if(party_id != '' || 1){
		emitt().then(function (a) {
			console.log(a)
		}).catch(function(e){
			alert('weee')
		});
	}
},false)

dagger.on("latest:block.number", function(result) {
	console.log("New block created: ", result);
  });