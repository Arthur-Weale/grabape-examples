import os
import requests

url = "https://grabape.p.rapidapi.com/v1/extract"

headers = {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": os.environ["GRABAPE_API_KEY"],
    "X-RapidAPI-Host": "grabape.p.rapidapi.com"
}

payload = {
    "url": "https://example.com",
    "include": ["article"]
}

response = requests.post(
    url,
    headers=headers,
    json=payload,
    timeout=30
)

response.raise_for_status()

data = response.json()

print(data)
