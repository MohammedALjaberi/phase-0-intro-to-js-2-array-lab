// Write your solution here!

let cats = [] ; 
cats.push('Milo', 'Otis', 'Garfield');
cats.push('Ralph');
cats.unshift("Bob");
console.log(cats);
cats.pop('Ralph') ; 
cats.shift("Bob");
let appendCat = [...cats , "Broom"];
let prependCat = ["Arnold",...cats] ; 
cats.slice(2); 
cats.slice(0);





