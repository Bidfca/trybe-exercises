const math = require('./math');

jest.mock("./math");

test("#subtrair", () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(2, 1);
    expect(math.subtrair).toHaveBeenCalled();
});

test("#multiplicar", () => {
    math.multiplicar.mockReturnValue(10);
    expect(math.multiplicar(5, 2)).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();
});

test("#somar", () => {
    math.somar.mockImplementation((a, b) => a + b);
    expect(math.multiplicar(5, 2)).toBe(10);
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledWith(5, 2);
});

test("#dividir", () => {
    math.dividir
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);
    
    expect(math.dividir).toHaveBeenCalledTimes(0);

    expect(math.dividir(2, 1)).toBe(2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(2, 1);

    expect(math.dividir(5, 1)).toBe(5);
    expect(math.dividir).toHaveBeenCalledTimes(2);
    expect(math.dividir).toHaveBeenCalledWith(2, 1);

    expect(math.dividir(3, 5)).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir).toHaveBeenCalledWith(3, 5);
});

// test("#subtrair", () => {
//     expect(math.subtrair(20, 10)).toBe(10);

//     const mockSubtrair = jest
//     .spyOn(math, "subtrair")
//     .mockReturnValue(20);

//     math.subtrair(30, 10);
//     expect(mockSubtrair).toHaveBeenCalledTimes(1);
//     expect(mockSubtrair(30, 10)).toBe(20);
//     expect(mockSubtrair).toHaveBeenCalledTimes(2);
//     expect(mockSubtrair).toHaveBeenCalledWith(30, 10);

//     math.subtrair.mockRestore();
//     expect(math.subtrair(20, 10)).toBe(10);
// });

