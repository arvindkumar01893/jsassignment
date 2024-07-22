# NFT Minting Script

This JavaScript script demonstrates a simple NFT (Non-Fungible Token) minting process. The script includes functions to mint NFTs, list all minted NFTs, and get the total supply of NFTs.

## Table of Contents
- [Assessment Requirements](#assessment-requirements)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [mintNFT](#mintnft)
  - [listNFTs](#listnfts)
  - [getTotalSupply](#gettotalsupply)

## Assessment Requirements

1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your `mintNFT` function that will hold the metadata for your NFTs. The metadata values will be passed to the function as parameters. When the NFT is ready, you will store it in the variable you created in step 1.
3. Your `listNFTs()` function will print all of your NFTs metadata to the console (i.e., `console.log("Name: " + someNFT.name)`).
4. For good measure, `getTotalSupply()` should return the number of NFTs you have created.

## Getting Started

To use this script, simply copy the code into a JavaScript file and run it in a JavaScript environment (e.g., Node.js or a web browser console).

## Usage

### mintNFT

The `mintNFT` function is used to create a new NFT and store its metadata.

#### Parameters:
- `_name`: The name of the NFT.
- `_height`: The height attribute of the NFT.
- `_weight`: The weight attribute of the NFT.
- `_bodycolor`: The body color attribute of the NFT.

#### Example:

```javascript
mintNFT("Avii", "Black", "Shirt", "Cap");
```
### listNFTs
The listNFTs function prints all of the metadata for the minted NFTs to the console.

Example:
```javascript
listNFTs();
```
### Output
ID:         1
Name:       Avii
height:     Black
weight:     Shirt
bodycolor:  Cap
...
### License
This project is licensed under the MIT License.
