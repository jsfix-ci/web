# Style Guide

- V dokumentaci, pull requestech a issues používejte češtinu, v commitech a zdrojovém kódu angličtinu.
- Zapněte si automatické formátování kódu pomocí Prettier. Nemusíme všichni souhlasit se všemi změnami, které Prettier udělá, ale nechat to na něm je lepší než se o tom donekonečna přít :)

# Zdroje dat

- Web načítá data přes API z [Airtable](https://airtable.com).
- Abyste nemuseli řešit klíče pro přístup k API, existuje také lokální kopie dat (viz `content/samples/`), která se automaticky použije, když není k dispozici klíč k Airtable.
- Pokud chcete lokální data aktualizovat z Airtable, spusťte `yarn update-data`.
- Pokud chcete vynutit použití lokálních dat, i když máte klíč k Airtable, nastavte proměnnou prostředí `DATA_SOURCE_LOCAL`, například `DATA_SOURCE_LOCAL=1 yarn dev`. Takhle si můžete snadno vyzkoušet například změny DB schématu.
- Pokud máte API klíč k Airtable, uložte ho do proměnné `AIRTABLE_API_KEY`. Nejen tahle proměnná se dá elegantně nastavit pomocí souboru `.env.local`, [viz dokumentaci Next.js](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables).
- Více úvah o databázích [najdete na wiki](https://github.com/cesko-digital/web/wiki/Databáze).

# Testy

Máme k dispozici následující hierarchii testů:

1. Typový systém
2. Jednotkové (unit) testy
3. Testy renderingu komponent
4. End-to-end (E2E) testy

Čím vyšší číslo v téhle hierarchii test má, tím déle trvá a je potenciálně křehčí (snáz se rozbije). Snažte se proto pohybovat co nejníže – pokud jde pro něco napsat test renderingu namísto E2E testu, je to lepší. A pokud jde napsat jednotkový test nebo danou invariantu vystihnout přímo v typovém systému, je to úplně nejlepší.

Ukázkové testy renderingu komponent najdete v adresáři `tests/rendering`.


# Poznámky k architektuře

- Nebojte se psát delší soubory. Mít každou drobnost v samostatném souboru je čistě režie navíc. Lze i zobecnit – míra „procesů“ (abstrakce, dělení do souborů, dělení do funkcí, …) musí odpovídat velikosti řešeného problému. Pokud zakládáte nový soubor kvůli čtyřem řádkům kódu, je slušná šance, že děláte něco špatně.
- Dvakrát se zamyslete, než přidáte novou závislost. Třikrát, pokud má sama nějaké další závislosti. Pokud jde o vyloženě větší závislost (React, GraphQL, …), domluvme se předem, jestli je to opravdu nutné. Pokud jde místo další závislosti napsat funkce o 10–20 řádcích, je to výrazně lepší. Velký počet závislostí zpomaluje build a celkově zhoršuje ergonomii práce na projektu.
