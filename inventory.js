const product1 = {
    name: "Indomie Noodles",
    category: "Food",
    price: 500,
    quantity: 8,
    minStockLevel: 10,
    discountRate: 0.15
};

console.log(`Product: ${product1.name} (${product1.category})`);
console.log(`Price: ${product1.price} RWF | Quantity: ${product1.quantity} units`);
const totalValue = product1.price * product1.quantity;
const discountAmount = product1.price * product1.discountRate;
const discountedPrice = product1.price - discountAmount;

console.log(`Total stock value: ${totalValue} RWF`);
console.log(`Discount per unit: ${discountAmount} RWF`);
console.log(`Discounted price: ${discountedPrice} RWF`);
if (product1.quantity === 0) {
    console.log(`${product1.name}: OUT OF STOCK - Reorder immediately.`);
} else if (product1.quantity < product1.minStockLevel) {
    console.log(`${product1.name}: LOW STOCK - ${product1.quantity} units remaining.`);
} else if (product1.quantity <= 50) {
    console.log(`${product1.name}: Healthy stock - ${product1.quantity} units.`);
} else {
    console.log(`${product1.name}: Well stocked - ${product1.quantity} units.`);
}