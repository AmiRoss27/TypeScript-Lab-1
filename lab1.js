var mountains = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var tallest = null;
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (!tallest) {
            tallest = mountain;
        }
        if (mountain.height > tallest.height) {
            tallest = mountain;
        }
    }
    return tallest === null || tallest === void 0 ? void 0 : tallest.name;
}
console.log(findNameOfTallestMountain(mountains));
var products = [
    {
        name: 'Purple Wig',
        price: 40.99
    },
    {
        name: 'Moogle Plush',
        price: 34.99
    },
    {
        name: 'Monster 12 pack',
        price: 19.99
    }
];
function calcAverageProductPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total / products.length;
}
console.log(calcAverageProductPrice(products));
var inventory = [
    {
        name: 'motor',
        price: 10.00,
        quantity: 10
    },
    {
        name: 'sensor',
        price: 12.50,
        quantity: 4
    },
    {
        name: 'LED',
        price: 1.00,
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        total += item.quantity * item.price;
    }
    return total;
}
console.log(calcInventoryValue(inventory));
