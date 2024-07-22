/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
const NFTs = []
function mintNFT (_name, _height, _weight, _bodycolor) {
    const NFT = {
        "name": _name,
        "height": _height,
        "weight": _weight,
        "bodycolor": _bodycolor,
    }   
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}
function listNFTs () {
 for(let i=0; i< NFTs.length; i++) {
     console.log("\nID: \t\t" + (i + 1));
     console.log("\nName: \t\t" + NFTs[i].name);
     console.log("height: \t\t" + NFTs[i].height);
     console.log("weight: \t\t" + NFTs[i].weight);
     console.log("bodycolor: \t\t" + NFTs[i].bodycolor);
 }    
}
function getTotalSupply() {
    console.log("\n number of NFTs = " + NFTs.length);
}

mintNFT("Avii","Black","Shirt","Cap");
mintNFT("Sakshi","Red","Pant","Chain");
mintNFT("Nidhi","Pink","TShirt","Bracelet");
mintNFT("Ishu","Blue","Shirt","Watch");
listNFTs();
getTotalSupply();
