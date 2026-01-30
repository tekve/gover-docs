---
sidebar_position: 5
---

# Riskilämpökartta

Riskilämpökartta tarjoaa visuaalisen esityksen riskimaisemastasi.

## Mikä on riskilämpökartta?

Lämpökartta näyttää riskit ruudukossa perustuen:

- **X-akseli**: Todennäköisyys (probability)
- **Y-akseli**: Vaikutus (severity)

Riskit klusteroituvat soluihin näyttäen niiden suhteellisen prioriteetin.

```
        Vaikutus
     Low  Med  High
    ┌────┬────┬────┐
Hi │ 🟡 │ 🟠 │ 🔴 │
    ├────┼────┼────┤  Todennäköisyys
Me │ 🟢 │ 🟡 │ 🟠 │
    ├────┼────┼────┤
Lo │ 🟢 │ 🟢 │ 🟡 │
    └────┴────┴────┘
```

## Lämpökartan tarkastelu

1. Siirry kohtaan **Riskit**
2. Klikkaa **Yleiskatsaus** tai **Lämpökartta** -näkymää
3. Näe riskit sijoitettuna todennäköisyyden ja vaikutuksen mukaan

## Lämpökartan lukeminen

### Värit

| Väri         | Merkitys                       |
| ------------ | ------------------------------ |
| 🔴 Punainen  | Kriittinen - Välitön huomio    |
| 🟠 Oranssi   | Korkea - Priorisoitu käsittely |
| 🟡 Keltainen | Keskitaso - Seuraa tiiviisti   |
| 🟢 Vihreä    | Matala - Hyväksyttävä riski    |

### Riskimäärä

Jokainen solu näyttää riskien määrän kyseisessä kategoriassa.

### Porautuminen (Drill Down)

Klikkaa solua nähdäksesi kyseisen kategorian riskit.

## Lämpökarttatyypit

### Kokonaisriskin lämpökartta

Näyttää riskit ennen hallintakeinoen soveltamista.

- Lähtötilanteen riskikuva
- Tunnistaa korkeimmat raakariskit

### Jäännösriskin lämpökartta

Näyttää riskit hallintakeinoen soveltamisen jälkeen.

- Nykyinen riskialtistus
- Mittaa hallintakeinoen tehokkuutta

### Vertailunäkymä

Kokonaisriski vs jäännösriski rinnakkain:

- Näe riskin väheneminen
- Tunnista käsittelypuutteet

## Lämpökartan suodattaminen

Suodata lämpökartalla näkyviä riskejä:

- **Kategoria** — Näytä tietyt riskikategoriat
- **Omistaja** — Näytä riskit omistajan mukaan
- **Tila** — Näytä käsittelytilan mukaan
- **Tunnisteet** — Suodata tagien mukaan

## Lämpökartan käyttö

### Priorisointi

Keskity ensin punaisen vyöhykkeen riskeihin.

### Raportointi

Vie lämpökartta johdon raportteihin.

### Trendianalyysi

Vertaa lämpökarttoja ajan myötä nähdäksesi parannukset.

### Gap-analyysi

Tunnista alueet, joissa riskit ovat keskittyneet.

## Parhaat käytännöt

1. **Tarkista säännöllisesti** — Käy lämpökartta läpi riskipalavereissa
2. **Vertaa näkymiä** — Tarkastele sekä kokonaisriskiä että jäännösriskiä
3. **Poraudu syvemmälle** — Tutki korkeiden riskien keskittymiä
4. **Seuraa liikettä** — Tarkkaile riskejä, jotka liikkuvat vyöhykkeiden välillä
5. **Jaa sidosryhmille** — Visuaalinen viestintä on tehokasta

## Seuraavat vaiheet

- [Kaavat](./formulas) — Konfiguroi riskipisteytys
- [Riskien käsittely](./risk-treatment) — Käsittele korkean prioriteetin riskit
