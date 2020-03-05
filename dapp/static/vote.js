aa.events.voterAdded({
    fromBlock: 'latest'
}, function(error, event){ console.log(event,error);})

async function vote(hash, party_id) {
    return await aa.methods.Vote(hash, Number(party_id)).send({from:aa.defaultAccount})
}

var v = document.getElementById('castVote');
v.addEventListener('click', function(){
	var voter_id = document.getElementById('voter_id').value;
	var hash = sha256(voter_id);
	var party_id = document.getElementById('party_id').value;
	if(voter_id != ''){
		vote(hash, party_id).then(function (a) {
			console.log(a)
		}).catch(function(e){
			alert('Error Casting Vote')
		});
	}
},false)