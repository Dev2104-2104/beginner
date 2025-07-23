import os
import string
from random import randint

pas = input("Send the Password: ")

keys = list(string.ascii_lowercase + string.digits)

pwg = ""
attempts = 0

while pwg != pas:
    pwg = ""
    for i in range(len(pas)):
        guessChar = keys[randint(0, len(keys)-1)]
        pwg += guessChar
    
    attempts += 1

print(f"The pass is: {pwg} (found in {attempts} attempts)")