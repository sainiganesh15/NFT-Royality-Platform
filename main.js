//Import createPandoraExpressSDK from SDK
const { createPandoraExpressSDK } = require("pandora-express");
const pandoraSDK = createPandoraExpressSDK();

const connectMetamask = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
      const accountNumber = `${accounts[0].slice(0, 8)}...`;
      connectButton.innerText = accountNumber;
        console.log("Connected to Metamask");
      } else {
        alert("Metamask not found");
      }
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
    }
  };
  
  // ...
  
  const connectButton = document.getElementById("connectMetamask");
  connectButton.onclick = connectMetamask;

const mintNft = async () => {
    //get current account address
      const accounts = await web3.eth.getAccounts();
    //Get ChainID of current account
      const chainId = await web3.eth.net.getId();
    //Mint NFT using SDK erc721 nft mint
     await pandoraSDK.erc721.nft.mint(web3, chainId, accounts[0], itemURI.value, [
      [accounts[0], 100],
    ]);
    };

    
    const sellNft = async () => {
        const accounts = await web3.eth.getAccounts();
        const chainId = await web3.eth.net.getId();
        console.log(chainId);
        await pandoraSDK.erc721.order.sellNFT(
          web3,
          chainId,
          sellItemTokenId.value,
          sellItemPrice.value,
          accounts[0]
         );
        };

        
        const buyNft = async () => {
            const accounts = await web3.eth.getAccounts();
            const chainId = await web3.eth.net.getId();
            console.log(chainId);
            await pandoraSDK.erc721.order.buyNFT(
              web3,
              chainId,
              buyItemSaleId.value,
              accounts[0],
              buyItemAmmount.value
             );
            };

            const setRoyalty = async () => {
                
           
                // Get current account address
                const accounts = await web3.eth.getAccounts();
                // Get ChainID of current account
                const chainId = await web3.eth.net.getId();
                const royaltyAddress = document.getElementById("numroyalityItem").value;
                const royaltyPercentage = document.getElementById("numroyalityAmmount").value;
                // Set royalty using SDK erc721 royalty set
                await pandoraSDK.erc721.royalty.set(
                  web3,
                  chainId,
                  royaltyAddress,
                  royaltyPercentage,
                  accounts[0]
                );
              };
  

            
            const itemURI = document.getElementById("txtCreateItemURI");

            const createItemButton = document.getElementById("btnCreateItem");
            createItemButton.onclick = mintNft;
            
            const sellItemTokenId = document.getElementById("numSellItemTokenId");
            const sellItemPrice = document.getElementById("numSellItemPrice");
            
            const sellItemButton = document.getElementById("btnSellItem");
            sellItemButton.onclick = sellNft;
            
            const buyItemSaleId = document.getElementById("numBuyItem");
            const buyItemAmmount = document.getElementById("numBuyItemAmmount");
            numBuyItemAmmount;
            
            const buyItemButton = document.getElementById("btnBuyItem");
            buyItemButton.onclick = buyNft;

            
            const setRoyaltyButton = document.getElementById("setNFTRoyalty");
            setRoyaltyButton.onclick = setRoyalty;

            
            init();
                    