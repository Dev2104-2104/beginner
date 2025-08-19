n = int(input("กรุณาป้อนจำนวนแถว : "))

for row in range(1, n + 1):
    space = n -  row
    star = 2 * row - 1
    print(" " * space + "*" * star)

    function = แปรตัว
    Arguments = ตัวแปรส่งค่า
            มีลักษณะการทำงานอยู่ 2 ลักษณะ
                1.*args (แบบกำหนดค่า)
                2.**kwargs (แบบกำหนดชื่อ)
    parametor = ตัวแปรรับค่า

    การทำงานของทั้ง 3 ตัวคือ Arguments ส่งค่าให้ function ส่งค่ามาเก็บไว้ใน parametor