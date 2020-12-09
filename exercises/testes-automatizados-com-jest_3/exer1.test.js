let randomNumber = () => Math.ceil(Math.random() * 100);

let isDivisible = (number) => (randomNumber() % number) === 0;

test('#isDivisible', () => {
    randomNumber = jest
    .fn()
    .mockReturnValue(3)
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2);
  
    expect(randomNumber).toHaveBeenCalledTimes(0);
    expect(isDivisible(1)).toBe(true);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(isDivisible(2)).toBe(true);
    expect(randomNumber).toHaveBeenCalledTimes(2);
    expect(isDivisible(3)).toBe(true);
    expect(randomNumber).toHaveBeenCalledTimes(3);
    expect(isDivisible(3)).toBe(true);
    expect(randomNumber).toHaveBeenCalledTimes(4);
});