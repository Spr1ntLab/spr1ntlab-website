# CSS: kur rašyti savo kodą? (MyTeam V4)

**Svarbiausia taisyklė: CSS faile rask savo Jira užduoties numerį ir rašyk tik tarp jos START ir END komentarų.**

## 1. Kuris failas kam skirtas?

| Failas | Kam skirtas? | Kas čia dirba? |
| --- | --- | --- |
| `normalize.css` | Reset: `box-sizing: border-box`, numatytieji tarpai, sąrašai, paveikslėliai | **Nekeisti** |
| `general.css` | Spalvų kintamieji, Livvic šriftas, `.container`, bendros taisyklės | **Nekeisti be komandos susitarimo** |
| `global.css` | Viršutinis meniu, CTA ir Footer | D01, D09, T01, T09, M01, M09 |
| `style.css` | Tik Home puslapis | D02–D04, T02–T04, M02–M04 |
| `about.css` | Tik About puslapis | D05–D06, T05–T06, M05–M06 |
| `contact.css` | Tik Contact puslapis | D07–D08, T07–T08, M07–M08 |

**CSS jau prijungtas prie HTML.** Jokio papildomo `<link>` pridėti nereikia.

## 2. Kaip surasti savo vietą?

Pavyzdys: tavo Jira Task yra **D02 — Desktop Home Hero**.

1. Atidaryk `index.html` ir susirask `START D02`. Ten yra tavo `<section class="home-hero">`.
2. Atidaryk `css/style.css` ir su `Ctrl + F` rask `START D02 — HOME HERO`.
3. Įrašyk savo stilius **tarp START ir END**:

```css
/* ===== START D02 — HOME HERO ===== */
.home-hero {
  padding: 80px 0; /* tik pavyzdys, tikrus dydžius imk iš Figma */
}
.home-hero__title {
  font-size: 100px; /* patikrink pagal Figma, ne visiems ekranams */
}
/* ===== END D02 ===== */
```

4. Nerašyk `.site-nav { ... }` šiame bloke, nes navigacija yra **D01** užduotis.

**Svarbu:** klasės HTML ir CSS turi būti **vienodos**. `.home-hero__title` nėra tas pats kas `.hero-title`.

## 3. Desktop → Tablet → Mobile

Viską rašome tame pačiame CSS faile; atskirų CSS failų planšetei ir telefonui nereikia.

- **Desktop (Dxx)**: bazinės taisyklės; orientyras — Figma 1440px.
- **Tablet (Txx)**: jau paruoštas `@media (max-width: 1023px)` blokas; Figma 768px.
- **Mobile (Mxx)**: jau paruoštas `@media (max-width: 767px)` blokas; Figma 375px.

Pavyzdys, jei darai **T02**, rašyk tik į **T02** bloką:

```css
/* ===== START T02 — HOME HERO ===== */
@media (max-width: 1023px) {
  .home-hero__title {
    font-size: 64px; /* tik pavyzdys */
  }
}
/* ===== END T02 ===== */
```

Telefono blokai yra po planšetės blokų, todėl telefonui skirtos taisyklės gali perrašyti planšetės taisykles. **Nekurk naujos HTML Hero sekcijos**.

Šie breakpoints yra **komandos techninis pasirinkimas**, ne automatiškai iš Figma gautos ribos. Jei dizainas pradeda lūžti ties kitu pločiu, aptark tai su komanda.

## 4. Specialios ribos, kurias būtina žinoti

- **D01/T01/M01:** `global.css` navigacijos blokai. Footer viduje esantis `<nav>` **nepriklauso** navigacijos užduočiai.
- **D09/T09/M09:** `global.css` turi **atskirus CTA ir Footer blokus**. CTA yra Home ir About, bet Contact puslapyje jo nėra.
- **D05/T05/M05:** `about.css` turi **About Intro ir About Clients** blokus. Jų viduryje yra svetima **Directors** sekcija.
- **D07/T07/M07:** Contact išorinis puslapio išdėstymas `.contact-content__layout` ir įžanga `.contact-content__intro`.
- **D08/T08/M08:** tik `.contact-form` ir jos vaikai. **Nekeisk `.contact-content__layout`**, nes tai D07 užduotis.

## 5. Kas jau padaryta?

- `normalize.css`: `*, *::before, *::after { box-sizing: border-box; }`, numatytųjų `margin` ir sąrašų ženkliukų reset; nereikia kopijuoti.
- `general.css`: spalvos `--color-*`, `--font-main: "Livvic"`, bendras `.container` ir matomas klaviatūros fokusas.
- `Livvic` Google Fonts prijungtas HTML `<head>`: 600 tekstui ir 700 antraštėms; nereikia `@import`.

## 6. Ko nedaryti?

- Nerašyk `h1 { ... }` visam puslapiui, jei nori pakeisti tik vieną antraštę. Naudok `.home-hero__title { ... }`.
- Nenaudok `!important`, kad „sutaisytum“ kito žmogaus CSS; geriau surask priežastį.
- Nekeisk `normalize.css`, `general.css` ir `.container` be susitarimo.
- Neredaguok kitos užduoties START/END bloko.
- Nekopijuok dar kartą Google Fonts nuorodos.
- Nepamiršk patikrinti 320px, 375px, 768px, 1024px ir 1440px bei tarpinių pločių.

## 7. Kas toliau?

Pabaigęs darbą, sutikrink su Figma, įsitikink, kad nėra horizontalaus slinkimo, ir atidaryk Pull Request. Bendrą procesą rasi [TEAM_WORKFLOW.md](../TEAM_WORKFLOW.md).
