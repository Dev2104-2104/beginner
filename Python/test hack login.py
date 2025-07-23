import hashlib
import json
import os

# ========== 1. ฟังก์ชันเข้ารหัสรหัสผ่าน ==========
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# ========== 2. ฟังก์ชันสมัครสมาชิก ==========
def register(username, password):
    users = {}
    if os.path.exists("users.json"):
        with open("users.json", "r") as f:
            users = json.load(f)
    if username in users:
        return "Username already exists."
    
    users[username] = hash_password(password)
    with open("users.json", "w") as f:
        json.dump(users, f)
    return "User registered successfully."

# ========== 3. ฟังก์ชันล็อกอิน ==========
def login(username, password):
    if not os.path.exists("users.json"):
        return "No users found."
    
    with open("users.json", "r") as f:
        users = json.load(f)

    hashed_input = hash_password(password)
    if username in users and users[username] == hashed_input:
        return "Login successful!"
    else:
        return "Login failed."

# ========== 4. ทดสอบระบบ ==========
if __name__ == "__main__":
    print("1. Register")
    print("2. Login")
    choice = input("Choose option: ")

    user = input("Username: ")
    pwd = input("Password: ")

    if choice == "1":
        print(register(user, pwd))
    elif choice == "2":
        print(login(user, pwd))
    else:
        print("Invalid choice.")
