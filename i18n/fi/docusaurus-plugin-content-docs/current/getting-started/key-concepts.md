---
sidebar_position: 3
---

# Peruskäsitteet

Näiden ydinkäsitteiden ymmärtäminen auttaa sinua saamaan parhaan hyödyn Goverista.

## GRC-hierarkia

```mermaid
flowchart TB
    subgraph Viitekehykset
        F[Viitekehys] --> R[Vaatimukset]
    end
    subgraph Toteutus
        C[Kontrollit] --> D[Dokumentit]
        C --> T[Tehtävät]
    end
    subgraph Riski
        RI[Riskit] --> RA[Riskiarvioinnit]
    end
    R -.->|yhdistetty| C
    RA -.->|lievennetty| C
    RA -.->|luo| T
```

## Viitekehykset

**Viitekehys** on jäsennelty joukko vaatimuksia, jotka määrittelevät vaatimustenmukaisuusstandardit. Esimerkkejä:

- **ISO 27001** — Tietoturvan hallintajärjestelmä
- **GDPR** — Tietosuoja-asetus
- **NIS2** — Verkko- ja tietoturvadirektiivi
- **SOC 2** — Palveluorganisaation kontrollit

Viitekehykset sisältävät **vaatimuksia**, jotka on järjestetty hierarkkiseen rakenteeseen (luvut, osiot, artiklat).

## Vaatimukset

**Vaatimukset** ovat viitekehyksen yksittäisiä vaatimustenmukaisuuskriteerejä. Jokainen vaatimus:

- Sisältää yksilöllisen tunnisteen (esim. "A.5.1.1")
- Sisältää kuvauksen ja ohjeistuksen
- Voidaan yhdistää yhteen tai useampaan kontrolliin
- Näyttää valmiustilan yhdistettyjen kontrollien perusteella

## Kontrollit

**Kontrollit** ovat toimenpiteitä, käytäntöjä tai menettelyjä, joita toteutat vaatimusten täyttämiseksi. Kontrolli voi:

- Yhdistyä useisiin vaatimuksiin eri viitekehyksissä
- Linkittyä todistedokumentteihin
- Sisältää liittyviä tehtäviä
- Olla luokiteltu ja merkitty tunnisteilla

:::info Kontrollien uudelleenkäyttö
Yksi kontrolli voi täyttää vaatimuksia useista viitekehyksistä. Esimerkiksi "Pääsynhallintakäytäntö" voi täyttää vaatimuksia sekä ISO 27001:ssä että GDPR:ssä.
:::

## Riskit

**Riskit** edustavat mahdollisia uhkia organisaatiollesi. Jokaisella riskillä on:

- **Luontainen riski** — Riskitaso ennen kontrolleja
- **Jäännösriski** — Riskitaso kontrollien soveltamisen jälkeen
- **Käsittelysuunnitelma** — Miten riskiä käsitellään (lieventäminen, hyväksyminen, siirtäminen, välttäminen)

## Riskiarvioinnit

**Riskiarvioinnit** arvioivat yksittäisiä riskejä mukautettavilla pisteytyskenttillä:

- Vaikutus- ja todennäköisyyspisteet
- Mukautetut arviointikentät
- Lasketut riskipisteet kaavoilla
- Riskitasomääritykset (Kriittinen, Korkea, Keskitaso, Matala)

## Dokumentit

**Dokumentit** toimivat todisteina kontrolleillesi. Ne voivat olla:

- Ladattuja tiedostoja (PDF, Word jne.)
- Suoraan Goverissa luotuja
- Linkitettyjä kontrolleihin todisteina

## Tehtävät

**Tehtävät** seuraavat vaatimustenmukaisuustoimintoja:

- Osoitettu tiimin jäsenille
- Sisältävät määräajat ja prioriteetit
- Voidaan linkittää kontrolleihin, riskeihin tai dokumentteihin
- Hallitaan Kanban-taululla tai listanäkymässä

## Yhdistämiset

**Yhdistämiset** ovat yhteyksiä entiteettien välillä:

| Mistä | Mihin | Tarkoitus |
|-------|-------|-----------|
| Vaatimus | Kontrolli | Näyttää miten vaatimukset täytetään |
| Kontrolli | Dokumentti | Linkittää todisteet kontrolleihin |
| Kontrolli | Riski | Näyttää mitkä kontrollit lieventävät riskejä |
| Kontrolli | Tehtävä | Seuraa toteutustyötä |

## Työtilat ja organisaatiot

- **Organisaatio** — Yrityksesi tai yhteisösi Goverissa
- **Työtila** — Erillinen ympäristö organisaation sisällä

Käyttäjillä voi olla eri rooleja ja oikeuksia eri työtiloissa.

## Sisältökeskus

**Sisältökeskus** tarjoaa:

- **Mallit** — Valmiit viitekehykset ja kontrollit
- **Oma sisältö** — Julkaisemasi sisältö
- **Löydä** — Yhteisön markkinapaikka
- **Asennetut** — Työtilaasi lisätty sisältö
