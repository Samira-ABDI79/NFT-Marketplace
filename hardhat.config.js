require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    //   hardhat: {},

    polygon_mumbai: {
      // chainId: 80001,
      url: process.env.POLYGON_MUMBAI,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
