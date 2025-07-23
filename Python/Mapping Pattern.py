customers = [
    {"name":"ก้อง", "type": "general"},
    {"name":"โจ้", "type": "member"},
    {"name":"แนน", "type": "general"}
]
id = int(input("ป้อนรหัสลูกค้า : "))
print(f"สวัสดีลูกค้ารหัส {id} :{customers[id]["name"]}")

match customers[id]:
    case {"type": "member"}:
        print(f"คุณ{"name"}ได้รับส่วนลด 10%")
    case _:
        print("คุณไม่ได้รับส่วนลด")