#กรอกข้อมูลพนักงาน
def get_employee():

    name = input("กรุณาป้อนชื่อ : ")
    department = input("กรุณากรอกตำแหน่งงาน : ")

    while True:
        try:
            salary = int(input("กรุณากรอกเงินเดือน : "))
            break
        except ValueError:
            print("กรุณาป้อนตัวเลขสำหรับเงินเดือน")
    return {"name": name, "department": department, "salary": salary}

def show_employee_info(employee):
    print(f"ชื่อ: {employee['name']}, แผนก: {employee['department']}")
    print(f"เงิน: {employee['salary']} บาท")
    print("--------------------------")

employee = []

while True:
    employee.append(get_employee())
    cont = input("ต้องการเพิ่มอีกหรือไม่ ? (y/n): ").lower()
    if cont != 'y':
        break
    
print("\n=== รายชื่อพนักงาน ===")
for emp in employee:
    show_employee_info(emp)