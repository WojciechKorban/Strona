# Korban Development

Strona firmowa Korban Development zbudowana jako statyczny projekt Astro i publikowana przez GitHub Pages pod adresem `https://korban.com.pl`.

## Uruchomienie lokalne

Zainstaluj zależności poleceniem `npm install`, a następnie uruchom `npm run dev`. Lokalny adres to `http://localhost:4321/`. Produkcyjny build sprawdzisz poleceniem `npm run build`.

## Publikacja na GitHub Pages

Publikację obsługuje workflow `.github/workflows/deploy.yml`. W ustawieniach repozytorium wybierz **Settings → Pages → Source: GitHub Actions**. Po wypchnięciu zmian do `main` workflow sprawdzi projekt, zbuduje Astro i opublikuje katalog `dist`.

Źródłem strony jest `src/pages/index.astro`. Przed publikacją potwierdź poprawność adresu e-mail w sekcji „Kontakt”.
