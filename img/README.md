# Figma paveikslėliai: kur juos dėti ir kaip nesugadinti kolegos darbo

**Svarbi taisyklė:** jei failas `img/` aplanke jau yra, **neperrašyk jo** be susitarimo. Visi paveikslėliai turi būti eksportuojami iš tikro Figma maketo — šiame karkase originalių failų dar nėra.

## 1. Kur dėti?

| Aplankas | Kas ten? | Pavyzdys |
| --- | --- | --- |
| `directors/` | Direktorių nuotraukos | `director-nikita-marks.jpg` |
| `clients/` | Klientų logotipai | `client-the-verge.svg` |
| `icons/` | Funkcinės ir socialinės ikonėlės | `icon-linkedin.svg` |
| `decorative/` | Fono ornamentai, linijos, dekoracijos | `home-hero-pattern-left.svg` |

Jei Testimonials portretams norite atskiro aplanko, **suderinkite vieną bendrą pavadinimą** (pvz., `testimonials/`) prieš jį sukurdami — nedarykite skirtingų aplankų tam pačiam tikslui.

## 2. Kaip pavadinti failą?

Naudok tik **mažąsias angliškas raides, skaičius, brūkšnelį `-`** ir tinkamą plėtinį (`.svg`, `.jpg`, `.webp`, `.png`). Venk `image1.png`, `new-logo.svg`, `final-final.jpg`.

- **Gerai:** `about-directors-pattern.svg`, `director-cristian-duncan.jpg`.
- **Blogai:** `foto 2.jpg`, `Screenshot.png`, `logo-v2-final-final.svg`.

Jei failas skirtas konkrečiai sekcijai, pradėk nuo tos sekcijos pavadinimo: `home-hero-...`, `about-directors-...`, `contact-...`.

## 3. Kaip išvengti perrašymo?

1. Prieš eksportą patikrink, ar tas failo pavadinimas jau yra saugykloje.
2. Jei tai **tas pats paveikslėlis**, naudok esamą, nekurk antros kopijos.
3. Jei tai **kitas paveikslėlis**, suteik kitą unikalų pavadinimą.
4. Jei reikia **pakeisti esamą** failą, pirmiausia parašyk atsakingam žmogui per Teams.
5. Pakeitimus įkelk per **savo Git šaką ir Pull Request**, ne tiesiai į `main`.

## 4. Keliai HTML ir CSS

HTML (puslapiai yra projekto šaknyje):

```html
<img src="img/directors/director-nikita-marks.jpg" alt="Nikita Marks">
```

CSS (failai yra `css/` aplanke, todėl prieš `img/` reikia `../`):

```css
.home-hero {
  background-image: url("../img/decorative/home-hero-pattern-left.svg");
}
```

**Nerašyk neegzistuojančio failo kelio į HTML.** Pirmiausia eksportuok tikrą failą, tada pridėk jo `src`.

## 5. Kokį formatą rinktis?

- **SVG:** logotipams, ikonoms, geometrinėms figūroms.
- **JPG / WebP:** fotografijoms.
- **PNG:** jei reikia permatomumo ir SVG netinka.

Jei paveikslėlis turi informacijos, parašyk prasmingą `alt` (pvz., `alt="Nikita Marks"`); jei tai tik puošmena, naudok `alt=""` arba CSS foną.

## 6. Patikra prieš Pull Request

- [ ] Paveikslėlis eksportuotas iš tikro Figma maketo.
- [ ] Failas tinkamame aplanke ir turi aiškų unikalų pavadinimą.
- [ ] Nesugadinau ir neperrašiau kolegos failo.
- [ ] HTML `src` / CSS `url()` kelias veikia.
- [ ] Paveikslėlis nesuspaustas, neištemptas ir ne per didelis.
- [ ] `alt` tekstas naudojamas teisingai.
