// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    return gamertag.length >= 8;
};

exports.isValid = isValid;
