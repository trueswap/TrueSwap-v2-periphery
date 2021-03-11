const port = process.env.HOST_PORT || 9090

// Don't put your private key here: source .env && tronbox migrate --network mainnet
module.exports = {
  networks: {
    mainnet: {
      privateKey: process.env.PRIVATE_KEY_MAINNET,
      userFeePercentage: 100,
      feeLimit: 1000000000,
      consume_user_resource_percent: 100,
      fullHost: 'https://api.trongrid.io',
      network_id: '1'
    },
    shasta: {
      privateKey: process.env.PRIVATE_KEY_SHASTA,
      uuserFeePercentage: 100,
      feeLimit: 1e9,
      consume_user_resource_percent: 100,
      fullHost: 'https://api.shasta.trongrid.io',
      network_id: '2',
    },
    nile: {
      privateKey: process.env.PRIVATE_KEY_NILE,
      userFeePercentage: 100,
      feeLimit: 1000000000,
      consume_user_resource_percent: 100,
      fullHost: 'https://api.nileex.io',
      network_id: '3'
    },
    development: {
      privateKey: process.env.PRIVATE_KEY_PRIVAATE,
      userFeePercentage: 0,
      feeLimit: 1e8,
      fullHost: 'http://127.0.0.1:' + port,
      network_id: '9'
    },
    compilers: {
      solc: {
        version: '0.6.0'
      }
    }
  },
  solc: {
    optimizer: {
      enabled: false, // default: false, true: enable solc optimize
      runs: 200
    },
    evmVersion: 'istanbul'
  }
}
