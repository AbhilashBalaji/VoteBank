const voteCoin = artifacts.require("voteCoin");
const Voter = artifacts.require("Voter");
module.exports = function (deployer) {
    deployer.deploy(voteCoin).then(function(){
        return deployer.deploy(Voter, voteCoin.address);
    });
};
