import string


# digits = ตัวเลข
# ascii_letters = สตริงที่รวมตัวอักษรภาษาอังกฤษตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ทั้งหมด (A-Z และ a-z)
# punctuation = ตัวอักษรพิเศษ

#keys = (list(string.digits + string.ascii_letters + string.punctuation))

keys = list(string.printable.strip())

print(keys)