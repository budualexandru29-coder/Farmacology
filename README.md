# Planșe OSPE Farmacologie

Simulator de examen OSPE pentru Farmacologie generală (Facultatea de Medicină, anul II, modulul 1). Conține 20 de variante construite după modelul de la LP 4 și după baremele reale: trei subiecte, 9 puncte, 7 minute, plus un punct bonus pe cascada moleculară.

Cazurile nu numesc medicamente. Dau proprietăți (afinitate, activitate intrinsecă, tip de receptor, lipofilie, inductor sau inhibitor), iar studentul deduce efectul.

## Ce face

- **Fișă student** cu cronometru de 7 minute și câmpuri pentru răspunsuri.
- **Barem de corectare** cu punctaj 0 / parțial / maxim, formulări acceptate și trimiteri la sursă (`LP 3 · c4`, `OSPE p.14`). Te punctezi singur, iar nota estimată se calculează automat.
- **Trimiteri apăsabile**: fiecare sursă din barem (`LP 3 p.15`, `OSPE p.9`) deschide citatul din barem și pasajul din LP sau din materialul OSPE, marcat cu galben, ca în Planșe Morfopatologie și în Simulatorul OSPE Histologie. Versiunea de aici arată textul citat; imaginile slide-urilor nu sunt publicate, pentru că materialele de curs sunt de uz intern.
- **Matrice de acoperire**: ce caz din LP apare în ce variantă.
- **Pentru tipar**: foile în așezarea oficială. Varianta gata de printat e în `OSPE-Farmacologie-V1-V20.pdf`.

Răspunsurile și punctajele se păstrează doar în browserul tău (localStorage).

## Cum îl deschizi

Deschide `index.html` în browser. Nu are nevoie de instalare sau server.

## Structură

| Fișier | Rol |
| --- | --- |
| `index.html` | Simulatorul, gata de folosit (generat) |
| `src/data.js` | Variantele: cazuri, întrebări, barem, surse |
| `src/template.html` | Interfața și stilurile |
| `src/sources.json` | Pentru fiecare trimitere: documentul, pagina și pasajul marcat |
| `src/check.js` | Verificare: 9 p pe variantă, fără denumiri de medicamente în fișe |
| `build.py` | Generează `index.html` din `src/` |

După o modificare în `src/data.js`:

```
cd src && node check.js && cd .. && python3 build.py
```

## Surse

LP 1–4 (Introducere – Farmacocinetică, Farmacodinamie, Farmacotoxicologie) și Materialul OSPE Farmacologie generală 2026–2027. Material de exersare, pentru uz intern; nu înlocuiește baremul oficial al disciplinei.
