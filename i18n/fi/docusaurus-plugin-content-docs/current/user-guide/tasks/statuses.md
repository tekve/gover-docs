---
sidebar_position: 4
---

# Tehtävien tilat

Konfiguroi työnkulun tilat tehtävillesi.

## Oletustilat

Gover tarjoaa oletustilat:

| Tila                | Tyyppi    | Kuvaus                |
| ------------------- | --------- | --------------------- |
| **Tehtävä**         | Avoin     | Ei aloitettu          |
| **Käynnissä**       | Käynnissä | Työ meneillään        |
| **Katselmoitavana** | Käynnissä | Odottaa katselmointia |
| **Valmis**          | Suljettu  | Valmistunut           |

## Tilojen hallinta

Siirry kohtaan **Tehtävät** → **Asetukset** → **Tilat**

### Luo tila

1. Klikkaa **Lisää tila**
2. Syötä:
   - **Nimi** — Tilan nimike
   - **Tyyppi** — Avoin, Käynnissä tai Suljettu
   - **Väri** — Visuaalinen ilmaisin
   - **Järjestys** — Sijainti työnkulussa
3. Tallenna

### Muokkaa tilaa

1. Klikkaa tilaa
2. Muokkaa tietoja
3. Tallenna muutokset

### Poista tila

1. Valitse tila
2. Klikkaa **Poista**
3. Valitse mitä tehdään kyseisen tilan tehtäville:
   - Siirrä toiseen tilaan
   - Pidä ennallaan (tila muuttuu ei-aktiiviseksi)

### Järjestä tilat uudelleen

Vedä ja pudota tiloja muuttaaksesi niiden järjestystä työnkulussa.

## Tilatyypit

| Tyyppi        | Merkitys           | Kanban                 |
| ------------- | ------------------ | ---------------------- |
| **Avoin**     | Työtä ei aloitettu | Vasemmat sarakkeet     |
| **Käynnissä** | Työ meneillään     | Keskimmäiset sarakkeet |
| **Suljettu**  | Työ valmis         | Oikeat sarakkeet       |

## Tilavärit

Määritä värit visuaalista erottelua varten:

- 🔵 Sininen — Avoin/Tehtävä
- 🟡 Keltainen — Käynnissä
- 🟣 Violetti — Katselmoitavana
- 🟢 Vihreä — Valmis
- 🔴 Punainen — Estetty

## Työnkulkuesimerkkejä

### Yksinkertainen työnkulku

```
Tehtävä → Käynnissä → Valmis
```

### Katselmointityönkulku

```
Tehtävä → Käynnissä → Katselmoitavana → Valmis
```

### Hyväksyntätyönkulku

```
Luonnos → Lähetetty → Hyväksytty → Valmis
         ↓
      Hylätty → Luonnos
```

## Parhaat käytännöt

1. **Pidä yksinkertaisena** — Älä luo liikaa tiloja
2. **Käytä selkeitä nimiä** — Tilan tulisi olla itsestään selvä
3. **Määritä siirtymät** — Tiedä miten tehtävät liikkuvat tilojen välillä
4. **Värikoodaa** — Käytä johdonmukaisia värejä
5. **Tarkista säännöllisesti** — Säädä työnkulkua tarvittaessa

## Seuraavat vaiheet

- [Kanban-taulu](./kanban) — Käytä tiloja Kanbanissa
- [Tehtävien yleiskatsaus](./overview) — Palaa yleiskatsaukseen
