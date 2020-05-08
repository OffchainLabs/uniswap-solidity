var UniswapExchange = artifacts.require("./UniswapExchange.sol");
var UniswapFactory = artifacts.require("./UniswapFactory.sol");
var ArbiswapTestToken = artifacts.require("./ArbiswapTestToken.sol");
var FaucetWallet = artifacts.require("./FaucetWallet.sol");

module.exports = async function(deployer) {
  let realArbiswapTestTokenAddress = "0x716f0d674efeeca329f141d0ca0d97a98057bdbf";

  await deployer.deploy(UniswapExchange);
  await deployer.deploy(UniswapFactory, UniswapExchange.address, realArbiswapTestTokenAddress);
  let faucet = await deployer.deploy(FaucetWallet);
  await faucet.updateFaucet(realArbiswapTestTokenAddress, "1000000000000000000", "1000000000000000000");

  // ArbiswapTestToken should be manually relocated to realArbiswapTestTokenAddress
  // in the resulting compiled.json file
  await deployer.deploy(ArbiswapTestToken, UniswapExchange.address);
};
