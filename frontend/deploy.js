
const hre = require("hardhat");

async function main() {
    const Rollup = await hre.ethers.getContractFactory("Rollup");
    const rollup = await Rollup.deploy("0xVerifierAddress");
    console.log("Rollup contract deployed to:", rollup.address);
}

main();
