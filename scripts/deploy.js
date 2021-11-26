const deploy = async() => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account: ", deployer.address);
    const Humans = await ethers.getContractFactory("Humans");
    const deployed = await Humans.deploy(2048);
    console.log("Humans 2048 is deployed at: ", deployed.address);
}

deploy()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});