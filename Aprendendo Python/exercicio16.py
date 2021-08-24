import random

# WORDS = [
#     "cat",
#     "elephant",
#     "dog",
#     "monkey",
#     "duck",
#     "chameleon",
#     "bear",
#     "moose",
#     "rooster",
# ]

with open("words.txt") as file:
    words = [word.strip() for word in file];

random_word = random.choice(words);
scrambled_word = "".join(random.sample(random_word, len(random_word)));

print(f"Palavra embaralhada: {scrambled_word}");

guess = None;
attempt = 0;
while(attempt < 3 and guess != random_word):
    guess = input(f"Tentativa {attempt + 1}: ");
    attempt += 1;

if guess == random_word:
    print("Acertou!");
else:
    print(f"Game Over, a palavra era {random_word}");