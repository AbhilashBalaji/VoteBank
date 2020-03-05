aa.events.hashAdded({
    fromBlock: 'latest'
}, function(error, event){ console.log(event,error);})

async function addHash(hash) {
    return await aa.methods.addHash(hash).send({from:aa.defaultAccount})
}

var h = document.getElementById('addHash');
h.addEventListener('click', function(){
	var voter_id = document.getElementById('voter_id').value;
	if(voter_id != ''){
        var hash = sha256(voter_id)
		addHash(hash).then(function (a) {
			console.log(a)
		}).catch(function(e){
			alert('Error Adding Hash')
		});
	}
},false)