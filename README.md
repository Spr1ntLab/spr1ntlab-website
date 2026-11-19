# myteam — bendras projekto pagrindas (V4)

Tai **neužbaigta svetainė**, o HTML5/CSS/JS karkasas darbui pagal Figma ir **Jira Backlog V4**. Maketo dizainą ir sąveikas įgyvendina komandos nariai pagal jiems priskirtas užduotis.

## Prieš pradėdamas

1. Atidaryk Jira užduotį ir perskaityk **Where to Work / Code Ownership**.
2. Susirask HTML komentaro pradžią `START Dxx / Txx / Mxx` ir pabaigą `END ...`.
3. Atidaryk nurodytą CSS failą; jame yra tavo numeriu pažymėtas blokas `START Dxx` / `END Dxx`.
4. **Nepervadink esamų klasių**, nekeisk kitų sekcijų ir nekopijuok viso HTML puslapio iš naujo.
5. Savo šakoje atlik užduotį, patikrink rezultatą ir sukurk Pull Request.

Plačiau: [TEAM_WORKFLOW.md](TEAM_WORKFLOW.md) (paprastai, žingsnis po žingsnio).

## Failai ir atsakingos užduotys

| Failas | Kam skirtas | Jira užduotys |
| --- | --- | --- |
| `index.html` + `css/style.css` | Home Hero, Benefits, Testimonials | D02–D04, T02–T04, M02–M04 |
| `about.html` + `css/about.css` | About Intro/Clients, Directors | D05–D06, T05–T06, M05–M06 |
| `contact.html` + `css/contact.css` | Contact Intro, Form | D07–D08, T07–T08, M07–M08 |
| `css/global.css` | Header/Navigation, CTA, Footer | D01, D09, T01, T09, M01, M09 |
| `css/normalize.css` | `box-sizing`, margino reset ir kt. | Jau paruošta – nekeisti |
| `css/general.css` | Spalvos, Livvic, `.container`, bendros taisyklės | Jau paruošta – pakeitimus derinti |
| `js/navigation.js` | Mobilus meniu | M01 |
| `js/directors.js` | Direktorių kortelių atvėrimas | D06 |
| `js/contact.js` | Kontaktų formos UI validacija, jei reikalinga | D08 |
| `js/main.js` | Rezervinis bendras JS failas | Nekeisti be susitarimo |

Visi CSS ir JS failai **jau prijungti** prie reikiamų HTML puslapių, JS naudojamas su `defer`.

## Bendri komponentai

- **Navigacija:** vienas `<nav class="site-nav">` kiekviename HTML faile, taip pat viena esama nuorodų grupė (`.site-nav__links`); mobilus meniu naudoja tą patį `.site-nav__panel`.
- **CTA:** `<aside class="site-cta">` yra **Home ir About**, bet jo **nėra Contact**.
- **Footer:** `<footer class="site-footer">` yra **visuose trijuose** puslapiuose.
- **Contact:** D07/T07/M07 valdo `.contact-content__layout` ir `.contact-content__intro`; D08/T08/M08 valdo **tik** `.contact-form`.
- **About:** D05/T05/M05 valdo **du atskirus** HTML blokus (Intro ir Clients). Vidurinė Directors sekcija priklauso D06/T06/M06.

## Ekranų dydžiai

Darbo seka: **Desktop → Tablet → Mobile**. Pagal projektui pasirinktą taisyklę CSS turi atskirus užduočių blokus:

- Desktop: bazinės taisyklės (orientyras — **1440 px** Figma kadras).
- Tablet: `@media (max-width: 1023px)` (orientyras — **768 px** kadras).
- Mobile: `@media (max-width: 767px)` (orientyras — **375 px** kadras).

Tai **komandos pasirinkti techniniai lūžio taškai**, o ne iš Figma automatiškai išgautos reikšmės. Papildomai patikrink 320 px, 1024 px ir tarpinius dydžius: negali atsirasti horizontalus slinkimas. Tablet ir Mobile užduotyse **nekurk atskiro HTML**.

## Svarbios pastabos

- **Livvic** per Google Fonts jau prijungtas: 600 ir 700 svoriai. Atskirų failų nereikia.
- Figma nuotraukos, SVG, logotipai **neįtraukti**, nes originalių eksportuotų resursų neturime. Juos reikės eksportuoti ir dėti pagal [img/README.md](img/README.md).
- [css/README.md](css/README.md) paaiškina, ką ir kur rašyti, su paprastais pavyzdžiais.
- Kortelės ir mobilus meniu turi **paruoštus HTML elementus**, tačiau JS sąveikos dar **neįgyvendintos** — jos yra D06 ir M01 užduotys.
- Kontaktų forma kol kas **neturi serverio**; D08 neturi teigti, kad tikrai siunčiami pranešimai.
- Nerediaguok `main` tiesiogiai; atlik darbą šakoje ir siųsk Pull Request.

**Figma:** https://www.figma.com/design/5gVHTOfjloSEIDnGBp4Orq/myteam-multi-page-website
