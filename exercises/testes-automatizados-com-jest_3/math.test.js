const math = require('./math');
jest.mock("./math");

test("#subtrair", () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(2, 1);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(2, 1);
    expect(math.subtrair(2, 1)).toBe(1);
});