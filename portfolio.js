// Task 2 create the portfolio module

//import assets array from asset.js
import { assets } from './asset.js';
//sums total value of portfolio
export function calculatePortfolioValue() {
    return assets.reduce((total, asset)=> total + asset.price * asset.quantity, 0);
};
//returns asset details based on provided id
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price*asset.quantity)/ totalValue)*100
    }));
};