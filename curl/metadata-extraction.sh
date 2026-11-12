#!/bin/bash

curl --request GET \
  --url "https://grabape.p.rapidapi.com/v1/extract?url=https%3A%2F%2Fexample.com" \
  --header "X-RapidAPI-Key: YOUR_GRABAPE_API_KEY" \
  --header "X-RapidAPI-Host: grabape.p.rapidapi.com"
