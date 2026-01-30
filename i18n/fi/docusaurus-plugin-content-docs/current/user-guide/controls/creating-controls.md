---
sidebar_position: 2
---

# Kontrollien luominen

Opi, kuinka lisäät kontrolleja Gover-työtilaasi.

## Tavat luoda kontrolleja

### 1. Manuaalinen luonti

Luo kontrolleja yksi kerrallaan:

1. Siirry kohtaan **Kontrollit** → **Lisää kontrolli**
2. Täytä kontrollin tiedot:
   - **Otsikko** — Selkeä, kuvaava nimi
   - **Kuvaus** — Mitä kontrolli tekee ja miten
   - **Kategoria** — Organisaation mukainen ryhmittely
   - **Omistaja** — Vastuuhenkilö
3. Klikkaa **Tallenna**

<!-- TODO: Add GIF showing control creation -->

### 2. Mallipohjista

Käytä valmiita kontrollimalleja:

1. Mene kohtaan **Kontrollit** → **Mallipohjat**
2. Selaa saatavilla olevia malleja kategorioittain
3. Klikkaa **Käytä mallipohjaa**
4. Mukauta tarpeen mukaan
5. Tallenna kirjastoosi

### 3. Sisältöhubista

Asenna kontrolleja markkinapaikalta:

1. Siirry kohtaan **Sisältöhubi** → **Discovery**
2. Etsi kontrollipaketteja
3. Klikkaa **Asenna**
4. Kontrollit lisätään kirjastoosi

### 4. Massatuonti

Tuo useita kontrolleja kerralla:

1. Mene kohtaan **Kontrollit** → **Tuo**
2. Lataa tuontimalli (template)
3. Täytä kontrollisi
4. Lataa tiedosto
5. Tarkista ja vahvista

#### Tuontimallin muoto

| Sarake        | Pakollinen | Kuvaus               |
| ------------- | ---------- | -------------------- |
| `title`       | Kyllä      | Kontrollin nimi      |
| `description` | Ei         | Kontrollin kuvaus    |
| `category`    | Ei         | Kategorian nimi      |
| `owner`       | Ei         | Omistajan sähköposti |

## Kontrollin tiedot

### Perustiedot

- **Otsikko** — Pidä ytimekkäänä mutta kuvaavana
- **Kuvaus** — Sisällytä:
  - Mitä kontrolli tekee
  - Miten se on toteutettu
  - Odotetut tulokset

### Kategoriat

Järjestä kontrollit kategorioihin:

- Tietoturvakontrollit
- Tietosuojakontrollit
- Operatiiviset kontrollit
- Tekniset kontrollit
- Hallinnolliset kontrollit

:::tip
Luo kategoria-rakenne, joka vastaa organisaatiosi tarpeita.
:::

### Mukautetut kentät

Lisää mukautettuja kenttiä lisäseurantaa varten:

- Implementointipäivämäärä
- Katselmointitiheys
- Vaatimustenmukaisuuden laajuus
- Riskiluokitus

### Tunnisteet

Käytä tunnisteita joustavaan ryhmittelyyn:

- Läpileikkaavat aiheet
- Projektiyhteydet
- Prioriteettitasot

## Parhaat käytännöt

1. **Käytä selkeitä nimiä** — "Pääsynhallintapolitiikka" ei "PHP-001"
2. **Ole täsmällinen** — Kuvaa tarkalleen mitä kontrolli tekee
3. **Määritä omistajat** — Jokaisella kontrollilla tulee olla vastuuhenkilö
4. **Kategorisoi johdonmukaisesti** — Käytä standardia kategoriarakennetta
5. **Linkitä todisteet** — Liitä tukidokumentit

## Kontrollin elinkaari

```mermaid
flowchart LR
    A[Luonnos] --> B[Käynnissä]
    B --> C[Implementoitu]
    C --> D[Katselmoinnissa]
    D --> C
    D --> E[Vanhentunut]
```

## Seuraavat vaiheet

- [Kontrollien yhdistäminen](./mapping) — Linkitä kontrollit vaatimuksiin
- [Kontrollien testaus](./testing) — Varmista tehokkuus
- [Kategoriat](./categories) — Järjestä kontrollisi
