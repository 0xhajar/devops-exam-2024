// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if (!atLeast8Characters(gamertag))
        return 'Invalid - gamertag length must be at least 8 characters';
    if (!atLeastOneSpecialCharacter(gamertag))
        return 'Invalid - gamertag must contain at least a special character';
    if (!atLeastOneNumber(gamertag))
        return 'Invalid - gamertag must contain at least a number';
    return 'Gamer tag is valid';
};

function atLeast8Characters(gamertag) {
    return gamertag.length >= 8;
}

function atLeastOneSpecialCharacter(gamertag) {
    return (
        gamertag.includes('&') ||
        gamertag.includes('$') ||
        gamertag.includes('è') ||
        gamertag.includes('!') ||
        gamertag.includes('§') ||
        gamertag.includes('à') ||
        gamertag.includes('_')
    );
}

function atLeastOneNumber(gamertag) {
    for (let i = 0; i < gamertag.length; i++) {
        if (!isNaN(gamertag[i])) {
            return true;
        }
    }
    return false;
}

exports.isValid = isValid;
