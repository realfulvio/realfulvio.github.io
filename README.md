# RealFulvio — Officina

Pagina statica di presentazione dei progetti di RealFulvio. HTML e CSS, senza dipendenze runtime, script, tracciamento o font esterni. Il tema segue la preferenza del dispositivo.

## Anteprima locale

Dalla cartella del sito: `python -m http.server 8765 --bind 127.0.0.1`, poi aprire http://127.0.0.1:8765.

## Pubblicazione su GitHub Pages

1. Creare il repository pubblico `realfulvio/realfulvio.github.io`.
2. Caricare il contenuto di questa cartella nella radice del branch `main`, incluso `.nojekyll`.
3. In Settings → Pages scegliere Deploy from a branch, branch `main`, cartella `/ (root)`.
4. Attendere il deployment e verificare https://realfulvio.github.io/.

Il repository del profilo `realfulvio/realfulvio` è distinto dal repository del sito.

## Modificare i progetti

Le schede sono in `index.html`; i loghi in `assets/`; i colori e il layout in `styles.css`. La scheda di Il Maneggio collega il sito pubblico. Non sono inclusi collegamenti a repository privati. I progetti senza sito dedicato rimandano al repository pubblico.

## Loghi e provenienza

Le immagini dei progetti sono copie ridimensionate delle icone e dei loghi originali recuperati il 17 novembre 2026. Mantengono colori e proporzioni. L'utilizzo su questa pagina non attribuisce una nuova licenza agli asset dei progetti.

| Progetto | Asset originale |
| --- | --- |
| CEDRO | `assets/icon-256.png` nel repository pubblico cedro |
| Trama | `assets/brand/trama-icon-1024.png` nel repository pubblico Trama |
| TracciaDoc | `assets/ui/app-icon-dark-256.png` nel repository pubblico tracciadoc |
| Mouse Macro | `assets/icon.png` nel repository pubblico mouse-macro-stocazz-superpower |
| Assistenza Portale | `public/img/icon-192.png` nel repository pubblico assistenza-portale |
| Smart Working Istituzionale | `applicazione/assets/icone/rendiconto.ico` nel repository pubblico smart-working-istituzionale |
| TRACE//PUNK | `src/lib/assets/favicon.svg` nel repository pubblico tracepunk |
| Decky Pilot | `assets/brand/decky-pilot-icon-dark.png` nel repository pubblico decky-pilot |
| Il Maneggio | Logo originale del progetto, fornito dal proprietario tramite il suo repository |

IQOS Linux usa il nome testuale, perché non è stato trovato un logo dedicato. Il favicon del sito è un monogramma `r>`.


## Pubblicazione prevista

Repository pubblico: `realfulvio/realfulvio.github.io`. Copiare i file di questa cartella nella radice del branch `main`; nelle impostazioni Pages scegliere Deploy from a branch, `main`, `/ (root)`. Il file `.nojekyll` evita elaborazioni Jekyll. Non occorrono build, chiavi o dipendenze runtime.

Indirizzo previsto: https://realfulvio.github.io/.

## Verifica eseguita

- 19 URL unici raggiungibili con risposta HTTP 200 al 17 novembre 2026.
- Tutti i nove loghi locali caricati correttamente.
- Browser Chromium, larghezze 320, 736 e 1280 px, tema chiaro e scuro: dieci schede, nessun overflow orizzontale, nessun errore JavaScript.
- Collegamento iniziale “Vai ai progetti” raggiungibile e attivabile da tastiera.
- Revisione indipendente dei sorgenti completata senza rilievi.
