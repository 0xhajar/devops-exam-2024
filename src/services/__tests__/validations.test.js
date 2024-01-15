// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the gamertag contains 8 or more characters', () => {
        const result = isValid('123');
        expect(result).toBe(
            'Invalid - gamertag length must be at least 8 characters'
        );
    });

    test('should return true or false as the gamertag contains at least one special character', () => {
        const result = isValid('test12345');
        expect(result).toBe(
            'Invalid - gamertag must contain at least a special character'
        );
    });

    test('should return true or false as the gamertag contains at least one special character', () => {
        const result = isValid('test12345&');
        expect(result).toBe('Gamer tag is valid');
    });

    test('should return true or false as the gamertag contains at least one number', () => {
        const result = isValid('testtttt&');
        expect(result).toBe(
            'Invalid - gamertag must contain at least a number'
        );
    });
});
