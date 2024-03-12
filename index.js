// usage of dformater

const { extractDate, formatDate } = require("dformater");

const date = new Date("2024-03-12");
console.log(extractDate(date));

const date2 = new Date("2024-03-12");

console.log(formatDate(date2));
