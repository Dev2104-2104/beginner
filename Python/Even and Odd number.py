end = int(input("กรุณากรอกตัวเลข : "))

for num in range(0, end + 1):
    if num % 2 == 0:
        print(f'{num} เป็นเลขคู่')
    else:
        print(f'{num} เป็นเลขคี่')