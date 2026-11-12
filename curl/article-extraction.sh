#!/bin/bash

curl --request POST \
  --url "https://grabape.p.rapidapi.com/v1/extract" \
  --header "Content-Type: application/json" \
  --header "X-RapidAPI-Key: YOUR_GRABAPE_API_KEY" \
  --header "X-RapidAPI-Host: grabape.p.rapidapi.com" \
  --data '{
    "url": "https://example.com",
    "include": ["article"]
  }'
