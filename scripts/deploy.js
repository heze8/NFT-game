const main = async () => {
    //Every time you run a terminal command that starts with npx hardhat you are getting this hre object built on the fly using the hardhat.config.js specified in your code! This means you will never have to actually do some sort of import into your files like:
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Warrior", "Archer", "Mage"],       // Names
      ["https://www.maxpixel.net/static/photo/1x/Warrior-The-Figurine-Knight-Crusader-Rider-1526945.jpg", // Images
      "https://live.staticflickr.com/8664/16808964526_bc35d2aec7_b.jpg", 
      "https://live.staticflickr.com/205/469026385_eaac733e4e_b.jpg"],
      [200, 100, 70],                    // HP values
      [50, 70, 105],                      // Attack damage values
      "Mad Ogre",
      "https://live.staticflickr.com/8169/8051409647_0c2ae105a8_b.jpg",
      10000, // Boss hp
      50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    
     
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #3");

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done deploying and minting!");
    
    // Get the value of the NFT's URI.
    //"go get me the data inside the NFT with tokenId 1", which would be the first NFT minted. And, it should give me back everything like: my character's name, my character's current hp, etc.
    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token URI:", returnedTokenUri);
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