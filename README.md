
# NFT Royality Platform
This project provides a simple SDK (Software Development Kit) for interacting with the NFT Membership platform. It allows users to connect their Metamask wallet, mint NFTs, sell NFTs, buy NFTs, and set royalties using the provided functions.

It is a platform that enables artists and creators to earn ongoing royalties from the secondary sales of their NFTs. This can involve tracking and automatically distributing royalties to the original creators whenever their NFTs are sold in the future.

## Prerequisities

Some Prequisites required before building the project:

```NodeJS version > 16.0.0
npm version > 6.0.0
Metamask Browser Extension
Parcel Bundler(For bundling Javascript)
```

## Code 

**1.Creating Project**:
Create an empty folder in your favourite editor. We will use VScode here.

**2.SDK installation**

Run in terminal

```
npm init 
npm i pandora-express 
npm install -g parcel-bundler
```

**3. Building the UI**: Make a index.html file and write the html code according to your requirement.

**4.Using SDK code with our javascript Logic**

Make a Javascript file, name it main.js, Now we have to import SDK function in our Dapp and make connection with blockchain using metamask. Paste the code below in main.js file.

```
//Import createPandoraExpressSDK from SDK
const { createPandoraExpressSDK } = require("pandora-express");
const pandoraSDK = createPandoraExpressSDK();
```
After Writing the javascript logic in main.js file 


**5. Run in terminal**

` parcel index.html`

## Functions

#### 1. Mint NFT
The `mintNft` function allows users to mint a new NFT by providing the token URI.


mintNft();


#### 2. Sell NFT
The `sellNft` function allows users to sell an NFT on the platform by providing the token ID and the selling price.


sellNft();

#### 3. Buy NFT
The `buyNft` function allows users to buy an NFT that is listed for sale by providing the sale ID and the amount to pay.


buyNft();
#### 4. Set Royalty
The setRoyalty function allows users to set the royalty for an NFT by providing the recipient address and the royalty percentage.


setRoyalty();


## Contributing

Contributions are welcome! Please open a pull request if you have any changes or improvements.

## License

The project is licensed under the MIT License.
