aa.events.voteAdded({
    fromBlock: 0
}, function(error, event){ console.log(event,error);})

async function vote() {
    return await aa.methods.addVote('alok', 1).send({from:aa.defaultAccount})
}

var v = document.getElementById('castVote');
v.addEventListener('click', function(){
	var voter_id = document.getElementById('voter_id').value;
	if(voter_id != ''){
		vote(voter_id).then(function (a) {
			console.log(a)
		}).catch(function(e){
			alert('Error Casting Vote')
		});
	}
},false)