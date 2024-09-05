const {
    isGame, isInGermany, isMasterDegree
   
} = require('./solution');

console.log("Users interested in playing video games:", isGame());
console.log(`all users staying in  Germany`, isInGermany('Germany'));
 console.log("Users with Master's Degree:", isMasterDegree("Masters"));