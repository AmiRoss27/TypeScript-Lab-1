interface Mountain{
    name: string;
    height: number;
}

const mountains: Mountain[] = [
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
]

function findNameOfTallestMountain(mountains: Mountain[]){
    
    let tallest = null;

    for (let mountain of mountains){
        
        if(!tallest){
            tallest = mountain
        }

        if(mountain.height > tallest.height){
            tallest = mountain;
        }
    }

    return tallest?.name;

}

console.log(findNameOfTallestMountain(mountains));


interface Product{
    name: string;
    price: number;
}

const products: Product[] = [
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
]

function calcAverageProductPrice(products: Product[]){
    var total = 0;
    for(let product of products ){
        total += product.price;
    }
    return total / products.length;
}

console.log(calcAverageProductPrice(products));

interface InventoryItem extends Product{
    quantity: number;
}

const inventory: InventoryItem[] = [
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
]

function calcInventoryValue(inventory: InventoryItem[]){
    let total = 0;
    for(let item of inventory){
        total += item.quantity * item.price
    }
    return total
}

console.log(calcInventoryValue(inventory));