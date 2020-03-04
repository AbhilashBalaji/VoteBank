const Govt = artifacts.require("./Govt.sol");

module.exports = async function (deployer) {
    await deployer.deploy(Govt, "Govt", "Govt")
    const erc721 = await Govt.deployed()
};