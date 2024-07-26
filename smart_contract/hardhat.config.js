require("@nomiclabs/hardhat-waffle");

// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/eAg-7DIa42OCPu0ndcvAMEhZu6vaEpkW",
      accounts: [
        "95a51074b40ec9fc16516d7d947692e2a8d632da994c0b2930b1ab778eb9dd57",
      ],
    },
  },
};
