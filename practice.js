
const productName = "Indomie Noodles";
const category = "Food";
let price = 500;
let quantity = 20;
const inStock = true;
console.log(productName);
console.log(category);
console.log(price);
console.log(quantity);
console.log(inStock);

console.log(typeof price);
console.log(`${productName} (${category}) - ${price} RWF per unit`);
console.log(`${quantity} units in stock. In stock: ${inStock}`);
console.log(`Total value: ${price * quantity} RWF`);

console.log(price > 1000);
console.log(quantity === 20);
console.log(quantity !== 0);
const totalValue = price * quantity;
console.log(`Remainder after splitting 3 ways: ${totalValue % 3} RWF`);
console.log(`Price including 10% tax: ${price * 1.10} RWF`);

if (quantity === 0) {
    console.log("CRITICAL: Out of stock. Reorder immediately.");
} else if (quantity < 10) {
    console.log("WARNING: Low stock. Consider reordering.");
} else if (quantity <= 50) {
    console.log("OK: Healthy stock level.");
} else {
    console.log("FULL: Warehouse well stocked.");
}
const product = {
    name: "Indomie Noodles",
    category: "Food",
    price: 500,
    quantity: 20,
    inStock: true
};

console.log(product.name);
console.log(product.category);
console.log(product.price);
console.log(product.quantity);
console.log(product.inStock);

console.log(`${product.name} (${product.category}) - ${product.price} RwF, ${product.quantity} units in stock.`);

product.price = product.price * 0.8;
console.log(`Promotion price: ${product.price} RwF`);