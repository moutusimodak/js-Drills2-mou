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

// Question 3

function isMasterDegree(degree) {
    const userlist = [];
    for (const key in users) {
        if (users[key].qualification === degree) {
            userlist.push(key);
        }
    }
    return userlist;
}

// Question 4

function programmingLanguageGroup() {
    let languageGroups = {
        'golang': [],
        'javascriptDeveloper': [],
        'python': []
    };

    const golangRegex = /\bGolang\b/i;
    const javascriptRegex = /\bjavascript\b/i;
    const pythonRegex = /Python\s*Developer/i;

    for (const key in users) {
        let designation = users[key].desgination;

        if (golangRegex.test(designation)) {
            languageGroups['golang'].push(key);
        } else if (javascriptRegex.test(designation)) {
            languageGroups['javascriptDeveloper'].push(key);
        } else if (pythonRegex.test(designation)) {
            languageGroups['python'].push(key);
        }
    }

    return languageGroups;
}

module.exports = {
   
    isGame, isInGermany, isMasterDegree, programmingLanguageGroup
};
