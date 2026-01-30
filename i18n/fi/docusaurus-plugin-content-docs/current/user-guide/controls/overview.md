---
sidebar_position: 1
---

# Kontrollit

Kontrollit ovat politiikkoja, menettelyjä ja toimenpiteitä, joita organisaatiosi toteuttaa täyttääkseen vaatimustenmukaisuusvaatimukset ja lieventääkseen riskejä.

## Mikä on kontrolli?

Kontrolli on suojatoimenpide tai vastatoimi, joka on suunniteltu:

- Täyttämään vaatimustenmukaisuusvaatimukset
- Lieventämään tunnistettuja riskejä
- Suojaamaan organisaation omaisuutta
- Varmistamaan toiminnan eheys

```mermaid
flowchart TD
    C[Kontrolli] --> R[Vaatimukset]
    C --> RI[Riskit]
    C --> D[Asiakirjat]
    C --> T[Tehtävät]
    C --> TE[Testaukset]
```

## Kontrollikirjasto

Kontrollikirjastosi on keskitetty varasto kaikille työtilasi kontrolleille.

### Näkymät

| Näkymä              | Kuvaus                                                    |
| ------------------- | --------------------------------------------------------- |
| **Luettelonäkymä**  | Lajiteltava, suodatettava taulukko kaikista kontrolleista |
| **Kategorianäkymä** | Kontrollit järjestetty kategoriaan                        |
| **Mallipohjat**     | Valmiiksi rakennetut kontrollimallit                      |

## Kontrollin ominaisuudet

Jokaisella kontrollilla on:

| Ominaisuus            | Kuvaus                            |
| --------------------- | --------------------------------- |
| **Otsikko**           | Kontrollin nimi                   |
| **Kuvaus**            | Yksityiskohtainen selitys         |
| **Kategoria**         | Organisaation mukainen ryhmittely |
| **Omistaja**          | Vastuuhenkilö                     |
| **Tila**              | Implementoinnin tila              |
| **Mukautetut kentät** | Lisäseurantakentät                |

## Kontrollien suhteet

Kontrollit yhdistyvät muihin entiteetteihin:

### Vaatimukset

- Kontrollit täyttävät viitekehysvaatimukset
- Yksi kontrolli voi yhdistyä useisiin vaatimuksiin
- Viitekehyksien välinen kartoitus tuettu

### Riskit

- Kontrollit lieventävät tunnistettuja riskejä
- Näyttää riskin vähentämisvaikutuksen
- Linkittyy riskinarviointeihin

### Asiakirjat

- Dokumentit tukevat kontrolleja
- Politiikat, menettelyt, tietueet
- Versonhallinta

### Tehtävät

- Implementointitehtävät
- Katselmointi- ja auditointitehtävät
- Korjaavat toimenpiteet

## Kontrollin tila

Seuraa implementoinnin edistymistä:

| Tila                | Merkitys                                    |
| ------------------- | ------------------------------------------- |
| **Luonnos**         | Kontrolli määritelty mutta ei implementoitu |
| **Käynnissä**       | Implementointi käynnissä                    |
| **Implementoitu**   | Kontrolli on toiminnassa                    |
| **Katselmoinnissa** | Aikataulutettu katselmointiin               |
| **Vanhentunut**     | Ei enää käytössä                            |

## Keskeiset toiminnot

| Toiminto    | Kuvaus                                     |
| ----------- | ------------------------------------------ |
| **Luo**     | Lisää uusia kontrolleja                    |
| **Tuo**     | Massatuonti mallipohjista tai tiedostoista |
| **Yhdistä** | Linkitä vaatimuksiin ja riskeihin          |
| **Testaa**  | Varmista kontrollin tehokkuus              |
| **Vie**     | Luo kontrolliraportteja                    |

## Seuraavat vaiheet

- [Kontrollien luominen](./creating-controls) — Lisää kontrolleja kirjastoosi
- [Kontrollien yhdistäminen](./mapping) — Linkitä kontrollit vaatimuksiin ja riskeihin
- [Kontrollien testaus](./testing) — Varmista kontrollin tehokkuus
