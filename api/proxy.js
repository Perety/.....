export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing URL');
  try {
    const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const contentType = response.headers.get('content-type') || 'text/html';
    res.setHeader('content-type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (err) {
    res.status(500).send('Error fetching URL');
  }
}
