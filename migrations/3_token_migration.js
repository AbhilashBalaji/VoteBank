var TutorialToken = artifacts.require("voteToken");

module.exports = function (deployer) {
    deployer.deploy(TutorialToken);
};