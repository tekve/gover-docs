---
sidebar_position: 6
---

# Riskipisteytyskaavat

Konfiguroi miten riskipisteet lasketaan työtilassasi.

## Mitä ovat kaavat?

Kaavat määrittelevät, miten arviointikenttien arvot yhdistyvät tuottaakseen riskipisteet.

```
Riskipisteet = f(Kenttä1, Kenttä2, ..., KenttäN)
```

## Kaavojen hallinta

Siirry kohtaan **Riskit** → **Asetukset** → **Pisteytyskaavat**

### Luo kaava

1. Klikkaa **Uusi kaava**
2. Syötä kaavan tiedot:
   - **Otsikko** — Kaavan nimi
   - **Kuvaus** — Mitä se laskee
3. Rakenna kaava-lauseke
4. Konfiguroi riskitasokartoitukset
5. Tallenna

### Kaavanrakentaja

Rakenna kaavoja käyttäen:

| Elementti        | Esimerkki                    |
| ---------------- | ---------------------------- |
| **Kentät**       | `Todennäköisyys`, `Vaikutus` |
| **Operaattorit** | `+`, `-`, `×`, `÷`           |
| **Numerot**      | `0.5`, `10`                  |
| **Sulut**        | `(a + b) × c`                |

### Esimerkkikaavat

**Yksinkertainen kertolasku**

```
Todennäköisyys × Vaikutus
```

**Painotettu keskiarvo**

```
(Todennäköisyys × 0.4) + (Vaikutus × 0.6)
```

**Monimutkainen kaava**

```
((Todennäköisyys × Vaikutus) + (Taloudellinen × 0.3)) / 2
```

## Riskitasokartoitukset (Risk Level Mappings)

Yhdistä pistealueet riskitasoihin:

| Pistealue | Taso         | Toimenpide                   |
| --------- | ------------ | ---------------------------- |
| 20-25     | Kriittinen   | Välitön toimenpide vaaditaan |
| 15-19     | Korkea       | Priorisoitu käsittely        |
| 10-14     | Keskitaso    | Suunnittele käsittely        |
| 5-9       | Matala       | Monitoroi                    |
| 1-4       | Hyvin matala | Hyväksy                      |

### Kartoitusten konfigurointi

1. Avaa kaava
2. Mene **Riskitasot** -välilehdelle
3. Aseta pistealueet kullekin tasolle
4. Määritä värit
5. Tallenna

## Arviointikentät

Kaavat käyttävät arviointikenttiä syötteinä.

### Kenttien hallinta

Siirry kohtaan **Riskit** → **Asetukset** → **Pisteytyskentät**

### Luo kenttä

1. Klikkaa **Lisää kenttä**
2. Konfiguroi:
   - **Nimi** — Kentän tunniste
   - **Nimike** — Näyttönimi
   - **Tyyppi** — Asteikkotyyppi
   - **Min/Max** — Arvoalue
3. Tallenna

### Kenttätyypit

| Tyyppi              | Kuvaus                          |
| ------------------- | ------------------------------- |
| **Asteikko**        | Numeerinen asteikko (esim. 1-5) |
| **Alasvetovalikko** | Ennalta määritetyt vaihtoehdot  |
| **Numero**          | Vapaa numerokenttä              |

## Oletus vs Aktiivinen

- **Oletuskaava** — Käytetään uusissa arvioinneissa
- **Aktiiviset kaavat** — Valittavissakäyttöön

Aseta kaava oletukseksi:

1. Avaa kaava
2. Kytke päälle **Aseta oletukseksi**
3. Tallenna

## Parhaat käytännöt

1. **Pidä yksinkertaisena** — Monimutkaisia kaavoja on vaikea selittää
2. **Dokumentoi perustelut** — Selitä miksi valitsit kaavan
3. **Testaa perusteellisesti** — Varmista laskelmat ennen käyttöä
4. **Linjaa metodologian kanssa** — Vastaa riskiviitekehystäsi
5. **Tarkista säännöllisesti** — Kaavat saattavat vaatia säätöä

## Seuraavat vaiheet

- [Riskinarvioinnit](./risk-assessments) — Käytä kaavoja arvioinneissa
- [Ylläpito-opas](../../admin-guide/organization-settings) — Organisaation laajuiset asetukset
