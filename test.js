const {
    isGame, isInGermany
   
} = require('./solution');

console.log("Users interested in playing video games:", isGame());
console.log(`all users staying in  Germany`, isInGermany('Germany'));