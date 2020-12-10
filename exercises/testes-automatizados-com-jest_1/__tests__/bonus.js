const searchEmployee = require('../bonus');

describe('searchEmployee', () => {
    it('should be a function', () => {
        expect(typeof searchEmployee).toBe('function');
    });

    it('should return detail', () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
        expect(searchEmployee('8579-6', 'lastName')).toBe('Gates');
        expect(searchEmployee('8579-6', 'specialities')).toContain('UX', 'Design');
    });

    it('should throw an error !id', () => {
        expect(() => { searchEmployee('1234-5', 'specialities') }).toThrow();
        expect(() => { searchEmployee('1234-5', 'specialities') })
            .toThrowError(new Error('ID não identificada'));
    });

    it('should throw an error !detail', () => {
        expect(() => { searchEmployee('8579-6', 'managers') }).toThrow();
        expect(() => { searchEmployee('8579-6', 'managers') })
            .toThrowError(new Error('Informação indisponível'));
    });

});