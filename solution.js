const users = require('./userdata');
//Question 1
function isGame() {

    const regex= /\bVideo\s*Games\b/i;
    const userList =[]

    for(const key in users){
        console.log(`user is coming: ${key}`);
       let interestlist = users[key].interests 
       console.log(interestlist);

      for (let i = 0; i < interestlist.length; i++) {
        
        if (regex.test(interestlist[i])) {

            userList.push(key);
            break;
         } 
        
      }
            
    }
    return userList;
}

// Question 2
function isInGermany(place) {
    const usersInGermany = [];
    for (const key in users) {
        if (users[key].nationality === place) {
            usersInGermany.push(key);
        }
    }
    return usersInGermany;
}



module.exports = {
   
    isGame, isInGermany
};
