const Voter = artifacts.require("Voter");

module.exports = function (deployer) {
    await deployer.deploy(Voter);
};
