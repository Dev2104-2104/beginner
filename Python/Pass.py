import os
import random
import string
import time

# รับพาสเวิร์ดจากผู้ใช้
pas = input("Send the password: ")

# ตัวอักษรที่ใช้ในการสุ่ม
keys = list(string.ascii_lowercase + string.digits)

pwg = ""
attempt = 0

while pwg != pas:
    pwg = ""
    for _ in range(len(pas)):
        pwg += random.choice(keys)
    
    attempt += 1
    print(f"Trying: {pwg} | Attempt: {attempt}")
    # time.sleep(0.05)  # เพิ่ม delay เล็กน้อยเพื่อให้เห็น

print(f"\n✅ Password cracked! The password is: {pwg} (found in {attempt} attempts)")