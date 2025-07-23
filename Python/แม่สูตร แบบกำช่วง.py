strat = int(input("กรุณากรอกตัวเลข : "))
end = int(input("กรุณากรอกตัวคูณตัวสุดท้าย : "))

for num in range(strat, end + 1):
    print("สูตรคูณแม่ : ", num)
    print(" ------------ ")
    for i in range(1, 13):
        print(num, "x", i, " = ", num*i  )
    print(" --------------- ")