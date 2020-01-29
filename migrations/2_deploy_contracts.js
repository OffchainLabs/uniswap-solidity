var UniswapExchange = artifacts.require("./UniswapExchange.sol");
var UniswapFactory = artifacts.require("./UniswapFactory.sol");

module.exports = async function(deployer) {
  await deployer.deploy(UniswapExchange);
  await deployer.deploy(UniswapFactory, UniswapExchange.address);
};
