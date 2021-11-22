const deploy = async() => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account: ", deployer.address);
    const GalleryArt = await ethers.getContractFactory("GalleryArt");
    const deployed = await GalleryArt.deploy();
    console.log("Gallery Art is deployed at: ", deployed.address);
}

deploy()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});