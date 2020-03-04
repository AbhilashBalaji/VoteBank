const VoteToken = artifacts.require("./VoteToken.sol");

module.exports = async function (deployer) {
    await deployer.deploy(VoteToken, "VoteToken", "VoteToken")
    const erc721 = await VoteToken.deployed()
};