while True:
    text = input("กรุณาป้อนเลข (หรือพิมพ์ x เพื่อออก): ")
    if text.lower() == "x":
        break

    n = int(text)

    for roe in range(1, n + 1):
        space = n - roe
        star = 2 * roe - 1
        print(" " * space + "*" * star)