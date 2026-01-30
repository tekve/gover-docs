---
sidebar_position: 2
---

# Viitekehysten lisääminen

Opi, kuinka lisäät vaatimustenmukaisuuden viitekehyksiä Gover-työtilaasi.

## Tavat lisätä viitekehyksiä

### 1. Mallipohjista

Nopein tapa aloittaa standardiviitekehysten kanssa.

1. Siirry kohtaan **Viitekehykset** → **Lisää viitekehys**
2. Valitse **Mallipohjat**
3. Selaa saatavilla olevia viitekehyksiä (ISO 27001, GDPR, NIS2, jne.)
4. Klikkaa **Lisää työtilaan**

<!-- TODO: Add GIF showing template selection -->

:::tip
Mallipohjat sisältävät täydellisen vaatimusrakenteen, valmiina kontrollien yhdistämistä varten.
:::

### 2. Sisältöhubista

Pääsy yhteisön ja markkinapaikan viitekehyksiin.

1. Mene kohtaan **Viitekehykset** → **Lisää viitekehys**
2. Valitse **Sisältöhubi**
3. Selaa **Discovery**-osiota löytääksesi viitekehyksiä
4. Klikkaa **Asenna** lisätäksesi työtilaasi

### 3. Mukautettu viitekehys

Luo oma viitekehyksesi tyhjästä.

1. Siirry kohtaan **Viitekehykset** → **Lisää viitekehys**
2. Valitse **Mukautettu**
3. Syötä viitekehyksen tiedot:
   - Nimi
   - Kuvaus
   - Versio
4. Lisää kategoriat ja vaatimukset manuaalisesti

## Viitekehyksen asetukset

Viitekehyksen lisäämisen jälkeen, määritä sen asetukset:

### Yleiset asetukset

- **Nimi** — Viitekehyksen näyttönimi
- **Kuvaus** — Yleiskatsaus viitekehykseen
- **Versio** — Viitekehyksen versionumero

### Mukautetut kentät

Lisää vaatimuksiin mukautettuja kenttiä lisätietojen seuraamiseksi:

- Tekstikentät
- Valintalasvetot (Select dropdowns)
- Päivämääräkentät
- Numerokentät

### Kategoriat

Järjestä vaatimukset loogisiin ryhmiin:

- Luo kategoriahierarkia
- Järjestä raahaamalla
- Määritä värit visuaalista erottelua varten

## Vaatimusten tuonti

Mukautetuille viitekehyksille voit tuoda vaatimuksia massana:

1. Avaa viitekehys
2. Mene kohtaan **Asetukset** → **Tuo**
3. Lataa CSV- tai Excel-tiedosto vaatimuksilla
4. Yhdistä sarakkeet Goverin kenttiin
5. Tarkista ja vahvista tuonti

### Tuontimuoto

| Sarake        | Pakollinen | Kuvaus                        |
| ------------- | ---------- | ----------------------------- |
| `identifier`  | Kyllä      | Yksilöllinen vaatimustunniste |
| `title`       | Kyllä      | Vaatimuksen otsikko           |
| `description` | Ei         | Yksityiskohtainen kuvaus      |
| `category`    | Ei         | Pääkategorian polku           |

## Parhaat käytännöt

1. **Aloita mallipohjilla** — Käytä valmiita viitekehyksiä kun mahdollista
2. **Tarkista ennen yhdistämistä** — Ymmärrä vaatimukset ennen kontrollien lisäämistä
3. **Käytä johdonmukaista nimeämistä** — Noudata nimeämiskäytäntöä mukautetuissa viitekehyksissä
4. **Versionhallinta** — Seuraa viitekehysversioita standardien päivittyessä

## Seuraavat vaiheet

- [Vaatimukset](./requirements) — Työskentele viitekehysvaatimusten kanssa
- [Valmiuden seuranta](./readiness-tracking) — Monitoroi vaatimustenmukaisuuden edistymistä
