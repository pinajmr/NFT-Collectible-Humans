require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const RINKEBY_PROJECT_ID = process.env.RINKEBY_PROJECT_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MUMBAI_PROJECT_ID = process.env.MUMBAI_PROJECT_ID;
const POLYGON_PROJECT_ID = process.env.POLYGON_PROJECT_ID;

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${RINKEBY_PROJECT_ID}`,
      accounts:[PRIVATE_KEY]
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${MUMBAI_PROJECT_ID}`,
      accounts:[PRIVATE_KEY]
    },
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${POLYGON_PROJECT_ID}`
    }

  }
}
