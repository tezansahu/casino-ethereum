var Casino = artifacts.require("./Casino.sol");

module.exports = function(deployer) {
  deployer.deploy(Casino, web3.utils.toWei('0.1', 'ether'));
};

//, 100, {gas: 3000000}