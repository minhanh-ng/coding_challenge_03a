const customers= [
    {name: "Nick", email: "nick@email.com", purchases: ["Paper", "Pen", "Pencil"]},
    {name: "Chimmie", email: "chimmie@email.com", purchases: ["Candle", "Pillow", "Chocolate"]},
    {name: "Dankey", email: "dankey@email.com", purchases: ["Ramen", "Chips", "Matcha"]}
];

const newCustomer = {name: "Cinnamoroll", email: "cinnamoroll@email.com", purchases:["Honey", "Nutella", "Strawberry"]};
customers.push(newCustomer);
console.log("Added customer: ", `${newCustomer.name} | ${newCustomer.email} | ${newCustomer.purchases}`);

const removedCustomer = customers.shift();
console.log("Removed customer: ", `${removedCustomer.name} | ${removedCustomer.email} | ${removedCustomer.purchases}`)

customers[0].email = "chimmie@gmail.com";

customers[2].purchases.push("Hot Chocolate");

customers.forEach(item => console.log(`Customer Name: ${item.name} | Email: ${item.email} | Total purchases: ${item.purchases.length}`));