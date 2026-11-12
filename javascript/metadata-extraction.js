const url = new URL("https://grabape.p.rapidapi.com/v1/extract");

url.searchParams.set("url", "https://example.com");

async function extractMetadata() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "YOUR_GRABAPE_API_KEY",
      "X-RapidAPI-Host": "grabape.p.rapidapi.com"
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  console.log(data);
}

extractMetadata().catch(console.error);
