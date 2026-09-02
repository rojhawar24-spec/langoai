# LangoAI dependency fix

De gemelde TypeScript-fouten kwamen doordat de npm-dependencies lokaal niet geïnstalleerd waren. De benodigde packages staan al in `package.json`.

Gebruik op Windows:

`INSTALL-FIX.bat`

Of in een terminal:

`npm install --no-audit --no-fund`

`npm run typecheck`

`npm run build`

De dubbele oude `langoai/` projectkopie is verwijderd zodat er nog maar één duidelijke projectroot overblijft.
