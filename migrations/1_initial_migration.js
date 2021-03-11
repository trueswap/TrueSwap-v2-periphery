const Router02 = artifacts.require('TrueswapRouter02')

module.exports = async function(deployer) {
  let factoryAddress = 'TWfifog962jFQDTh7URJiybVmpkcPrTf7z' // Contract Factory
  let WTRXAddress = 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR' // WTRX Address

  await deployer.deploy(Router02, ...[factoryAddress, WTRXAddress]) // Deploy
}
