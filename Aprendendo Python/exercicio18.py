def fb(n):
  if n % 3 == 0 and n % 5 == 0:
    return "FizzBuzz";
  elif n % 3 == 0:
    return "Fizz";
  elif n % 5 == 0:
    return "Buzz";
  else:
    return n;

def fizzbuzz(n):
    return list(map(fb, [num for num in range(1, n + 1)]));
