async function extractArticle() {
  const response = await fetch(
    "https://grabape.p.rapidapi.com/v1/extract",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "YOUR_GRABAPE_API_KEY",
        "X-RapidAPI-Host": "grabape.p.rapidapi.com"
      },
      body: JSON.stringify({
        url: "https://example.com",
        include: ["article"]
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(data));
  }

  console.log(data);
}

extractArticle().catch(console.error);
