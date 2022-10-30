const value1 = 234;
const value2 = Math.floor(Math.random() * 456);

/* 
В данной формуле операции выполняются в следующем порядке:
value2 делится на 5, затем сумма с value1 и затем сумма с 17 
*/
const result = value1 + value2 / 5 + 17;

console.log(result);
