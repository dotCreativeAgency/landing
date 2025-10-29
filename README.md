# Landing Page MidClass - "Coming Soon"

## 📍 Posizione
La landing page si trova in `/public/landing/` ed è accessibile via web.

## 🌐 Accesso

### URL di Accesso
```
http://localhost/landing/index.html
```

oppure (se configurato un dominio)
```
https://tuodominio.com/landing/index.html
```

## 📂 Struttura File

```
/public/landing/
├── index.html          # Pagina HTML principale
├── styles.css          # Tutti gli stili CSS
├── countdown.js        # JavaScript per countdown timer
└── README.md          # Questo file
```

## ⚙️ Configurazione Countdown

### Modificare la Data di Lancio

Apri il file `countdown.js` e modifica la data target:

```javascript
// Data di lancio impostata: 5 Novembre 2025
const launchDate = new Date('2025-11-05T23:59:59');

// Puoi modificarla con una data diversa:
// const launchDate = new Date('2025-12-31T23:59:59');
```

## 🎨 Caratteristiche

### Design
- ✅ HTML/CSS puro (nessuna dipendenza)
- ✅ Responsive (mobile-first)
- ✅ Animazioni CSS native
- ✅ Countdown timer JavaScript vanilla
- ✅ Palette colori MidClass (#FF6B35, #FFD23F, #32D74B, #00A8E8)

### Sezioni Incluse
1. **Hero Section** - Presentazione brand con countdown "Coming Soon"
2. **Value Propositions** - 4 card features (VIP, AUTO, 24/7, SMART)
3. **Trust Signals** - Metriche fiducia e badges compliance
4. **Organization Partnership** - Sezione partner organizzazioni
5. **Footer** - Link utili e contatti

### Modifiche dalla Versione React
- ❌ **Rimosso**: AccessCards (login/registrazione)
- ❌ **Rimosso**: FinalCTA (call-to-action finali)
- ✅ **Aggiunto**: Coming Soon Box con countdown timer
- ✅ **Convertito**: Da React/MUI a HTML/CSS puro

## 🚀 Deploy

### Deploy su Hosting Statico
1. Scarica tutti i file dalla cartella `/public/landing/`
2. Carica i file via FTP/SFTP sul tuo hosting
3. Accedi via browser al percorso dove hai caricato `index.html`

### Deploy su Server Laravel (già configurato)
La landing page è già accessibile nella cartella `public` di Laravel:
```
http://localhost/landing/index.html
```

### Redirect su Root Domain (opzionale)
Se vuoi che la landing page sia accessibile su `tuodominio.com/` invece che `tuodominio.com/landing/`, aggiungi in `/public/.htaccess`:

```apache
# Redirect root to landing page
RewriteEngine On
RewriteRule ^$ /landing/index.html [L]
```

## 🔧 Personalizzazioni

### Modificare Colori
Apri `styles.css` e cerca le variabili colore:
- `#FF6B35` - Arancione primario
- `#FFD23F` - Giallo secondario
- `#32D74B` - Verde accent
- `#00A8E8` - Blu accent

### Modificare Contenuti
Tutti i contenuti sono direttamente nell'HTML. Apri `index.html` e modifica:
- Titoli, sottotitoli, descrizioni
- Email e numeri di telefono
- Link footer

### Aggiungere Form Newsletter (futuro)
Cerca il commento `<!-- Coming Soon Box -->` in `index.html` e aggiungi un form HTML dove necessario.

## 📊 Performance

- ⚡ **Caricamento velocissimo**: ~15KB HTML + ~14KB CSS + ~4KB JS
- 🎯 **SEO-friendly**: HTML semantico con meta tags
- 📱 **Mobile-first**: Responsive design con media queries
- ♿ **Accessibile**: Struttura HTML semantica

## 🐛 Troubleshooting

### Il countdown mostra "00:00:00:00"
Verifica che `countdown.js` sia caricato. Apri la console browser (F12) e cerca:
```
Countdown initialized. Launch date: [data]
```

### CSS non caricato
Verifica che i percorsi siano corretti:
```html
<link rel="stylesheet" href="./styles.css">
<script src="./countdown.js"></script>
```

### Animazioni non funzionano
Verifica che il browser supporti CSS animations. Tutte le animazioni sono definite in `styles.css` con `@keyframes`.

## 📝 Note

- Questa landing page è **completamente separata** dal frontend React di MidClass
- Può essere deployata **indipendentemente** dal resto dell'applicazione
- Non richiede **nessun build** o compilazione
- Compatibile con tutti i browser moderni (Chrome, Firefox, Safari, Edge)

## 📞 Informazioni Aziendali

**Società:**
- Promartech S.r.l. - MidClass Network
- P.IVA: 18170371001
- Sede Legale: Via delle Case Rosse 23, 00131 Roma

**Contatti:**
- Email partnership: `partnership@midclass.it`
- Email support: `support@midclass.it`

---

**Creato**: Ottobre 2024
**Versione**: 1.0.0
**Tecnologie**: HTML5, CSS3, JavaScript Vanilla