# Nova Ženska P(r)iča — Web Sajt

Ovo je zvanični sajt frizerskog salona **Nova Ženska P(r)iča**, razvijen pomoću **React + Vite** i hostovan preko **Vercela**.

## 🔧 Tehnologije

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- Deployment preko [Vercel](https://vercel.com/)

## 📁 Struktura Projekta

/
├── public/ # statički fajlovi (favicon, robots.txt itd.)
├── src/
│ ├── components/ # Header, Footer, Layout
│ ├── pages/ # Home, Usluge, Prodavnica, Galerija, O nama, Kontakt
│ └── App.jsx
├── api/
│ └── sitemap.js # dinamički sitemap.xml fajl
├── vite.config.js
├── vercel.json # podešavanja za rewrite i content-type
└── README.md

markdown
Copy
Edit

## 🌐 Sitemap

Sitemap se dinamički generiše putem `api/sitemap.js` rute. Dodata je i `vercel.json` konfiguracija da Content-Type bude `application/xml`.

### Primer izlaza:
https://novazenskaprica.rs/api/sitemap

markdown
Copy
Edit

### robots.txt
Fajl `robots.txt` se nalazi u `public/` folderu i sadrži:

User-agent: *
Allow: /
Sitemap: https://novazenskaprica.rs/sitemap.xml

markdown
Copy
Edit

> Sitemap se automatski preusmerava na `/api/sitemap` putem Vercel rewrites.

## ✅ Status Google Indexiranja

- Vlasništvo domena potvrđeno u Google Search Console.
- Sitemap uspešno poslat i obrađen.
- Stranice otkrivene: Usluge, Prodavnica, Galerija, O nama, Kontakt

## 🚀 Pokretanje lokalno

```bash
npm install
npm run dev
🛠 Deploy
Deployment se vrši automatski preko Vercela nakon svakog commit-a.
