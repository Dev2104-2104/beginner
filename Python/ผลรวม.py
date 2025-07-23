total = 0

while True:
    number = int(input("ป้อมตัวเลข : "))
    if number <=0:
        break
    total+=number

print("ผลรวม =", total)