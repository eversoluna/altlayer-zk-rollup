
require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
            accounts: [process.env.PRIVATE_KEY]
        }
    }
};
