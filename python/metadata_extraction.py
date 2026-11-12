import os
import requests

url = "https://grabape.p.rapidapi.com/v1/extract"

params = {
    "url": "https://example.com"
}

headers = {
    "X-RapidAPI-Key": os.environ["GRABAPE_API_KEY"],
    "X-RapidAPI-Host": "grabape.p.rapidapi.com"
}

response = requests.get(
    url,
    headers=headers,
    params=params,
    timeout=30
)

response.raise_for_status()

data = response.json()

print(data)
