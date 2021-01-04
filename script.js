const meal = {
    entrees: [{
        name: 'Shrimp Cocktail',
        price: 9.99,
        gluten: false,
    }, {
        name: 'Mussel pot',
        price: 16.99,
        gluten: false, 
    }, {
         name: 'Garlic Bread',
         price: 7.99, 
         gluten: true, 
    }, {
         name: 'Wedges with Sour Cream',
         price: 8.99,
         gluten: true, 
    }, {
         name: 'Tempura Chips',
         price: 8.99,
         gluten: false, 
    }],
    mains: [{
        name: 'Pork Belly',
        price: 36.00,
        gluten: true, 
    }, {
        name: 'Scotch Fillet',
        price: 32.00,
        gluten: false,
    }, {
         name: 'Caesar Salad',
         price: 27.00,
         gluten: true,
    }, {
         name: 'Chicken and Bacon Burger',
         price: 27.00,
         gluten: true,
    }, {
        name: 'Haloumi Salad',
        price: 23.00,
        gluten: false,
    }, {
        name: 'Lamb Shank',
        price: 36.00,
        gluten: true,
    }],
    desserts: [{
        name: 'Cheese Platter',
        price: 35.00,
       gluten: false,
    }, {
        name: 'Banana Cheesecake',
        price: 12.99,
        gluten: true,
    }, {
        name: 'Fudge Brownie',
        price: 12.99,
        gluten: true,
    }, {
        name: 'Brandy Snaps',
        price: 12.99,
        gluten: true,
    }, {
        name: 'Christmas Cake with Custard',
        price: 12.99,
        gluten: false,
    }],
};

const randomIndex = (item) => {
    return item[Math.floor(Math.random() * item.length)];
};

let randomEntree = randomIndex(meal.entrees);
let randomMain = randomIndex(meal.mains);
let randomDessert = randomIndex(meal.desserts);
let totalCost = (randomEntree.price + randomMain.price + randomDessert.price).toFixed(2)

console.log(`You are having ${randomEntree.name} as an entree, ${randomMain.name} as a main, and ${randomDessert.name} as a dessert.`);

console.log(`The total cost is ${totalCost}.`);

if (randomEntree.gluten || randomMain.gluten || randomDessert.gluten) {
    console.log('This meal contains gluten.')
} else {console.log('This meal does not contain gluten.');
}


