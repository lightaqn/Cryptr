const main = async () => {
  const tradesFactory = await hre.ethers.getContractFactory("Trades");
  const tradesContract = await tradesFactory.deploy();

  await tradesContract.deployed();
  console.log("Trades deployed to: ", tradesContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
runMain();
