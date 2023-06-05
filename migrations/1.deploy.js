const GuanYuCoin = artifacts.require('GuanYuCoin')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(GuanYuCoin)
}
