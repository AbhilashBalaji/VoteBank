aa.events.partyAdded({
    fromBlock: 'latest'
}, function(error, event){ console.log(event,error);})

async function addParty(partyID, addr) {
    return await aa.methods.addPartyMap(partyID, addr).send({from:aa.defaultAccount})
}

var p = document.getElementById('addParty');
p.addEventListener('click', function(){
    var addr = document.getElementById('addr').value;
    var party_id = document.getElementById('party_id').value;
	if(party_id != '' || 1){
		addParty(party_id, addr).then(function (a) {
			console.log(a)
		}).catch(function(e){
			alert('Nope')
		});
	}
},false)

// dagger.on("latest:block.number", function(result) {
// 	console.log("New block created: ", result);
//   });