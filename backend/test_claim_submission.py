import requests
import json

# Backend URL
BASE_URL = "http://localhost:5000"

# Simulated claim data
payload = {
    "itemId": "your_item_document_id",  # 🔁 Replace with a real Firestore item ID
    "userId": "user_123",
    "userEmail": "testuser@example.com",
    "uniqueIdentifiers": "black, cracked screen",
    "additionalDetails": "Lost at church during night prayers"
}

# Submit claim
response = requests.post(
    f"{BASE_URL}/submit_claim",
    headers={"Content-Type": "application/json"},
    data=json.dumps(payload)
)

print("Status Code:", response.status_code)
print("Response JSON:", response.json())

