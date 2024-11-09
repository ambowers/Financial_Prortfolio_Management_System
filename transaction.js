// Create the transaction module

//import assets and getAssetById from asset.js
import { assets, getAssetById } from './asset.js';
//defie and export a class transaction
export class Transaction {
    constructor(assetID, type, quantity){
        this.asset = getAssetById(assetID);
        this.type = type;
        this.quantity= quantity;
this.executeTransaction();
}
//check if enough quantity is available for a sale
executeTransaction(){
    if(this.type==="buy"){
        this.asset.quantity += this.quantity;
    } else if (this.type === "sell"){
        throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
    }
    this.asset.quantity-=this.quantity;
}}