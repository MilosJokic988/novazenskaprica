export default function handler(req, res) {
  res.setHeader("Content-Type", "application/xml");
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://novazenskaprica.rs/</loc>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://novazenskaprica.rs/usluge</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://novazenskaprica.rs/prodavnica</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://novazenskaprica.rs/galerija</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://novazenskaprica.rs/o-nama</loc>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://novazenskaprica.rs/kontakt</loc>
    <priority>0.80</priority>
  </url>
</urlset>`);
  res.end();
}
