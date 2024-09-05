const users = require('./userdata');
//Question 1
function isGame(users) {

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




module.exports = {
   
    isGame, users
};
