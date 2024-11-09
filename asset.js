// Task 1 create the asset module

export const assets = [
    { id: 1, name: "Google", type: "stock", price: 1500, quantity: 5},
    { id: 2, name: "Tesla", type: "stock", price: 400, quantity: 7},
    { id: 3, name: "Amazon", type: "stock", price: 100, quantity: 10}
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}