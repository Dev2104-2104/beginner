data = [1, 2, 3]

match data:
    case []:
        print("ไม่พบข้อมูล")
    case [1, 2]:
        print("พบข้อมูล 2 จำนวน คือ 1, 2")
    case [1, 2, 3]:
        print("พบข้อมูล 3 จำนวน คือ 1, 2, 3")