const main = async () => {
    //Every time you run a terminal command that starts with npx hardhat you are getting this hre object built on the fly using the hardhat.config.js specified in your code! This means you will never have to actually do some sort of import into your files like:
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Warrior", "Archer", "Mage"],       // Names
      ["https://www.maxpixel.net/static/photo/1x/Warrior-The-Figurine-Knight-Crusader-Rider-1526945.jpg", // Images
      "https://live.staticflickr.com/8664/16808964526_bc35d2aec7_b.jpg", 
      "https://p1.pxfuel.com/preview/633/786/370/lego-wizard-gandalf-gray-grey-forest.jpg"],
      [200, 100, 70],                    // HP values
      [50, 70, 105]                       // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();