export default async function handler(req, res) {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "Missing q parameter" });

  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&no_redirect=1&no_html=1`;
    const r = await fetch(url);

    // Check if response is JSON
    const text = await r.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch (e) {
      return res.status(500).json({
        error: "DuckDuckGo returned invalid JSON",
        raw: text
      });
    }

    return res.json({
      query: q,
      abstract: data.Abstract || null,
      heading: data.Heading || null,
      related: data.RelatedTopics || []
    });

  } catch (err) {
    return res.status(500).json({
      error: "Failed to fetch from DuckDuckGo",
      details: err.message
    });
  }
}
