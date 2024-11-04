import requests

BASE_URL = "http://localhost/backend/index.php"

def create_profile(name, email, age):
    response = requests.post(f"{BASE_URL}?action=create", json={
        "name": name,
        "email": email,
        "age": age
    })
    if response.status_code == 200:
        print("Profile created successfully.")
    else:
        print("Error:", response.json())

def clone_profile(profile_id):
    response = requests.post(f"{BASE_URL}?action=clone", json={"id": profile_id})
    if response.status_code == 200:
        print("Profile cloned successfully.")
    else:
        print("Error:", response.json())

# Example usage:
if __name__ == "__main__":
    print("Creating a new profile...")
    create_profile("John Doe", "john@example.com", 30)
    
    print("Cloning the profile with ID 1...")
    clone_profile(1)
