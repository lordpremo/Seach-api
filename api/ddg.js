export default async function handler(req, res) {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: "Missing q parameter" });

  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&no_redirect=1&no_html=1`;
  const r = await fetch(url);
  const data = await r.json();

  res.json({
    query: q,
    abstract: data.Abstract,
    heading: data.Heading,
    related: data.RelatedTopics
  });
}
