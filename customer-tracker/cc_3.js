const customers= [
    {name: "Nick", email: "nick@email.com", purchases: ["Paper", "Pen", "Pencil"]},
    {name: "Chimmie", email: "chimmie@email.com", purchases: ["Candle", "Pillow", "Chocolate"]},
    {name: "Dankey", email: "dankey@email.com", purchases: ["Ramen", "Chips", "Matcha"]}
];

customers.push(
    {name: "Cinnamoroll", email: "cinnamoroll@email.com", purchases:["Honey", "Nutella", "Strawberry"]}
);

customers.shift();

customers[1].email = "chimmie@gmail.com";

customers[2].purchases.push("Hot Chocolate");

console.log(customers)

customers.forEach(item => console.log(`Customer Name: ${item.name} | Email: ${item.email} | Purchases: ${item.purchases}`));