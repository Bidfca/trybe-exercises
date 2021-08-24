from exercicio18 import fizzbuzz

def test_se_n_2_retorna_os_numeros_corretos():
    assert fizzbuzz(2) == [1,2];

def test_fizz_se_divisivel_por_tres():
    assert fizzbuzz(3)[-1] == 'Fizz';

def test_fizzbuzz_se_divisivel_por_tres_e_por_cinco():
    assert fizzbuzz(15)[-1] == 'FizzBuzz';

def test_buzz_se_divisivel_por_cinco():
    assert fizzbuzz(5)[-1] == 'Buzz';