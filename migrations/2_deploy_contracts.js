var UniswapExchange = artifacts.require("./UniswapExchange.sol");
var UniswapFactory = artifacts.require("./UniswapFactory.sol");

module.exports = async function(deployer) {
  await deployer.deploy(UniswapExchange);
  let factory = await deployer.deploy(UniswapFactory);
  factory.initializeFactory(UniswapExchange.address);
};
