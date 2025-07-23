import string
from random import choice


pas = input("Send the Password: ")

keys = list(string.printable.strip())

guess = ""
attempt = 0

for i in range(len(pas)):
    char = " "
    while char != pas[i]:
        char = choice(keys)
        attempt += 1
        print(f"Trying: {guess + char} | Attempt: {attempt}")
    guess += char

print(f"\nPassword found: {guess} in {attempt} attempts.")
