export default function handler(req, res) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://novazenskaprica.rs/</loc><priority>1.00</priority></url>
    <url><loc>https://novazenskaprica.rs/o-meni</loc><priority>0.80</priority></url>
    <url><loc>https://novazenskaprica.rs/usluge</loc><priority>0.80</priority></url>
    <url><loc>https://novazenskaprica.rs/kontakt</loc><priority>0.80</priority></url>
  </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
