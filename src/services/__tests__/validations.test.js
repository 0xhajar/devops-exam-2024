// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the gamertag contains 8 or more characters', () => {
        const result = isValid("123");
        expect(result).toBe(false);
    });
    
    test('should return true or false as the gamertag contains 8 or more characters', () => {
        const result = isValid("test12345");
        expect(result).toBe(false);
    });

    test('should return true or false as the gamertag contains at least one special character', () => {
        const result = isValid("test12345&");
        expect(result).toBe(true);
    });
});


