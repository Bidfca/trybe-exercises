def piramide(n):
    num_asteriscos = 1;
    for linhas in range(n):
        print('*' * num_asteriscos);
        num_asteriscos += 1;

# def draw_triangle(n):
#     for row in range(1, n + 1):
#         print(row * '*');

piramide(18);