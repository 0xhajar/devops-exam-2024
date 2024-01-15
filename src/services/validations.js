// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if(gamertag.length >= 8 && 
        (gamertag.includes('&') || 
         gamertag.includes('$') || 
         gamertag.includes('è') || 
         gamertag.includes('!') || 
         gamertag.includes('§') || 
         gamertag.includes('à') || 
         gamertag.includes('_'))) {
            for(let i = 0; i < gamertag.length; i++) {
                if(!isNaN(gamertag[i])) {
                    return true;
                }
            }
    }
    return false;
};

exports.isValid = isValid;
