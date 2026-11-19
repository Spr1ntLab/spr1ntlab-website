# Kaip dirbti su MyTeam projektu (paprastai)

Šis vadovas skirtas visiems komandos nariams, net jei su GitHub ir Jira dirbate pirmą kartą.

## 1. Prieš rašydamas kodą

1. Atsidaryk **savo Jira Task**.
2. Pažiūrėk paveikslėlį kairėje ir perskaityk **Description / Requirements**.
3. Rask **Where to Work / Code Ownership**: ten parašyta, kurioje HTML vietoje ir kuriame CSS faile dirbti.
4. Įsitikink, kad ankstesnė būtina užduotis jau baigta (jei nurodyta **Depends on**).
5. Susikurk **atskirą Git šaką** savo užduočiai, pvz., `feature/d02-home-hero`.

## 2. Rask savo vietą HTML

Pavyzdys, jei užduotis **D02 — Home Hero**:

- Atsidaryk `index.html`.
- Su paieška `Ctrl + F` rask `START D02`.
- Savo HTML keisk tik iki `END D02`.
- **Nekeisk** kitų žmonių sekcijų. **Nepervadink** klasių, kurios jau yra HTML.

Kitos užduotys gali turėti **dvi vietas** (pvz., D05 turi About Intro ir About Clients). Abi jos bus nurodytos Jira.

## 3. CSS rašyk tik savo vietoje

- Atidaryk Jira nurodytą CSS failą.
- Su `Ctrl + F` rask, pvz., `START D02`.
- Prieš `END D02` rašyk savo klasių taisykles.
- Tablet ir Mobile užduotims yra atskiri `@media` blokai (`Txx` ir `Mxx`).
- CSS klasę rašyk **su tašku**: `.home-hero { ... }`.

**Negalima:** be susitarimo keisti `normalize.css`, `general.css`, kito žmogaus `Dxx/Txx/Mxx` bloko arba kurti naujo CSS failo.

## 4. Paveikslėliai ir JavaScript

- Figma paveikslėlius dėk į `img/`. Visada perskaityk [img/README.md](img/README.md).
- Nepakeisk esamo failo tuo pačiu pavadinimu nepasitaręs.
- Jeigu tavo užduočiai nereikia JavaScript, **JS nekeisk**.
- Mobilus meniu: `js/navigation.js` (**M01**); direktorių kortelės: `js/directors.js` (**D06**); kontaktų formos UI: `js/contact.js` (**D08**).
- Visi šie failai jau prijungti su `defer`.

## 5. Prieš Pull Request

- [ ] Palyginau savo dalį su Figma.
- [ ] Dirbau tik savo HTML/CSS/JS srityje.
- [ ] Puslapis atsidaro be klaidų; CSS ir JS nuorodos veikia.
- [ ] Nėra horizontalaus slinkimo; patikrinau ir gretimą ekrano plotį.
- [ ] Nepakeičiau kitų komponentų.
- [ ] Jei tai Navigation / Footer, patikrinau **Home, About ir Contact**.
- [ ] HTML ir CSS patikrinau su validatoriumi.
- [ ] Jira **Acceptance Criteria** įvykdyti.
- [ ] Įkėliau ekrano nuotrauką prie PR arba Jira komentarų ir paprašiau kolegos peržiūros.

**Jei iš tikrųjų reikia keisti kito žmogaus klasę ar bendrą failą, pirmiausia parašykite Teams.** Tai geriau nei netyčia sugadinti kitą puslapį.
