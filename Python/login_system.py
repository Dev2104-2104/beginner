import hashlib
import json
import os

def load_users():
    if os.path.exists("users.json"):
        with open("users.json", "r") as f:
            return json.load(f)
    return {}

def save_users(users):
    with open("users.json", "w") as f:
        json.dump(users, f)

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

def register(username, password):
    users = load_users()
    if username in users:
        return "Username already exists."
    users[username] = {"password": hash_password(password), "failed_attempts": 0, "locked": False}
    save_users(users)
    return "User registered successfully."

def login(username, password):
    users = load_users()
    if username not in users:
        return "User not found."
    if users[username]["locked"]:
        return "Account locked due to too many failed attempts."
    if users[username]["password"] == hash_password(password):
        users[username]["failed_attempts"] = 0
        save_users(users)
        return "Login successful!"
    else:
        users[username]["failed_attempts"] += 1
        if users[username]["failed_attempts"] >= 3:
            users[username]["locked"] = True
        save_users(users)
        return f"Login failed. Attempt {users[username]['failed_attempts']}/3."

if __name__ == "__main__":
    print("1. Register")
    print("2. Login")
    choice = input("Choose option: ")

    username = input("Username: ")
    password = input("Password: ")

    if choice == "1":
        print(register(username, password))
    elif choice == "2":
        print(login(username, password))
    else:
        print("Invalid choice.")
