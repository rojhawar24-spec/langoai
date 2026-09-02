# Lango AI — audit-fixes van deze sessie (12 augustus 2026)

**Update (vervolgronde, zelfde dag):** coins/hearts-aankopen/Mystery Box/
gift-codes zijn alsnog volledig server-authoritative gemaakt — zie #2, #3,
#25 hieronder. Was in de eerste ronde bewust opengelaten; nu wel gedaan
nadat `ArenaPage.tsx` (2200+ regels) volledig gelezen was.

**Update (2e vervolgronde, zelfde dag):** premium/Ko-fi-betaalflow
doorgelicht — een kritieke bug gevonden en gefixt (de sessie-gebaseerde
betaling werkte principieel niet, al trof dat nog geen echte gebruiker
omdat de betaalknop uitstaat). Plus: e-mail/profiel-desync gefixt op
databaseniveau (#12), en de Daily Goal-instelling in Settings doet nu echt
iets (#23).

**Update (3e vervolgronde, zelfde dag):** 2FA/MFA doorgelicht (niet uit de
audit-lijst, maar dezelfde ernst) — twee kritieke gaten gevonden: 2FA-
codes waren volledig onbeperkt te proberen, en 2FA uitschakelen was één
klik zonder bevestiging. Beide gefixt en met een echte, uitgevoerde test
tegen de rate-limit-endpoint bevestigd. Zie #12.

**Update (4e vervolgronde, zelfde dag):** de resterende betaal-bestanden
(`ipn.js`, PayPal) en GDPR-verwijdering (`delete-account.js`) doorgelicht.
`ipn.js` bleek losstaande code zonder enige lezer — niet afgemaakt, want
waarschijnlijk restcode van vóór de overstap naar Ko-fi. Account-
verwijdering liet lokale voortgangsdata achter (kon naar een nieuw account
op hetzelfde toestel lekken) en de data-export miste de gift-codes-tabel
— bij het testen van die laatste fix bleek een ontbrekende RLS-policy de
query stil niets te laten teruggeven. Alle drie gefixt.

**Update (5e vervolgronde, zelfde dag):** #19 (WCAG) opgepakt — geen
browser-tests mogelijk, maar wel alle 5 modals in de app opgezocht en
gecontroleerd op focus-traps. 4 van de 5 misten dit volledig ondanks
correcte ARIA-attributen; 1 (CookieBanner) had het al goed en diende als
referentie. Alle 4 nu consistent gefixt.

**Update (6e vervolgronde, zelfde dag):** wachtwoord-reset-flow
doorgelicht — een echte bypass gevonden. De pagina controleerde alleen
"is er een sessie", niet "is dit specifiek een reset-link" — waardoor wie
al ingelogd was (of tijdelijk toegang had tot een sessie) een nieuw
wachtwoord kon zetten zonder het huidige te kennen. Gefixt met Supabase's
eigen `PASSWORD_RECOVERY`-event, geverifieerd tegen hun actuele docs.

Gebaseerd op je twee audit-documenten (Koerdisch, P0–P2 genummerd 1–50) en de
Nederlandse security/speed-herprioritering. Elk punt hieronder verwijst naar
het oorspronkelijke nummer waar van toepassing.

**Legenda:** ✅ Gefixt en getest · 🟡 Backend klaar, frontend-koppeling nog
niet gedaan · ⬜ Niet aangepakt deze sessie (met reden)

---

## 0. Jouw directe vraag: AI-provider wisselen zonder code aan te passen

✅ **Gefixt.** Nieuw: `api/_lib/ai/` — één interface, twee providers.

```
AI_PROVIDER=claude   (default)  → ANTHROPIC_API_KEY nodig
AI_PROVIDER=gemini               → GEMINI_API_KEY nodig
```

Zet één van deze twee env vars in Vercel, redeploy, klaar. `api/chat.js`
weet niet meer welke AI erachter zit — geen codewijziging nodig om te
wisselen. Optioneel ook het exacte model overschrijven zonder code aan te
raken: `CLAUDE_MODEL` / `GEMINI_MODEL` (defaults: `claude-haiku-4-5-20251001`
en `gemini-2.5-flash`).

**Hoe getest:** 26 executable tests (niet alleen gelezen — echt uitgevoerd
in Node, met een gemockte `fetch` die het request onderschept):
- Provider-selectie: default naar claude, wisselt naar gemini via env var,
  case/whitespace-tolerant, gooit een duidelijke fout bij een onbekende
  waarde (6/6 pass)
- Claude: juiste URL, headers (`x-api-key`, `anthropic-version`), body-vorm,
  model-default, foutafhandeling bij ontbrekende key (8/8 pass)
- Gemini: juiste URL/model, `x-goog-api-key` header, `systemInstruction` als
  object (niet als kale string — een bekende stille-fout valkuil), role-
  mapping `assistant`→`model`, `maxOutputTokens` i.p.v. `max_tokens`, en een
  expliciete fout (niet een lege string) als een antwoord door een
  veiligheidsfilter wordt geblokkeerd (12/12 pass)

Gemini-endpoint/velden geverifieerd tegen actuele Google-documentatie
(augustus 2026), niet uit trainingsgeheugen.

---

## 1. P0 — Security & data-authority

### #1 XP/level/streak client-side aanpasbaar — Gefixt
De kern van beide audits. `supabase/schema.sql` paragraaf 7: `total_xp`,
`level`, `streak`, `last_activity_date` zijn niet meer direct schrijfbaar
door de client (`REVOKE UPDATE` op die kolommen). Nieuwe `SECURITY DEFINER`
functies (`award_xp`, `reconcile_streak`, `reset_learning_progress`)
herberekenen alles server-side.

**Belangrijk:** `AuthContext.tsx`'s `updateProfile()` herkent zelf wanneer
een aanroep deze velden raakt en routeert automatisch naar de juiste RPC.
Geen van de 5 pagina's die XP toekennen (Arena, Test, Grammar, WOTD,
Vocabulary) hoefde te veranderen — ze roepen nog steeds gewoon
`createXPAwarder(updateProfile)` aan zoals voorheen.

**Hoe getest:**
- Het level-formule (`compute_level` in SQL) letterlijk vergeleken met
  `computeLevel()`/`xpRequiredForLevel()` uit `xp.ts` over 50.000+ XP-
  waarden plus alle levelgrenzen tot niveau 500 — 100% identiek, 0 verschil
- Elke `updateProfile()`-aanroep in de hele codebase nagelopen (9 call
  sites) en handmatig getraceerd door de nieuwe routeringslogica
- Bug gevonden tijdens testen: mijn eerste versie whitelistte exacte
  XP-bedragen (5, 10, 15, 20, 30, 50) uit `XP_REWARDS`. Bij het narekenen
  tegen alle 5 pagina's bleek `ArenaPage.tsx` een eigen, aparte constante
  te gebruiken (`XP_PER_LEVEL = 20`) die niet uit `XP_REWARDS` komt.
  Toevallig al gedekt, maar niet door ontwerp — bij een toekomstige
  aanpassing van een van beide constanten was dit stilletjes gaan breken.
  Vervangen door een bereik-check (1 t/m 100) — robuuster tegen precies
  dit soort drift.
- Bug gevonden tijdens testen: 3 SQL-hulpfuncties misten expliciete
  REVOKE/GRANT (Postgres geeft standaard EXECUTE aan iedereen op nieuwe
  functies). Geen actief lek (pure, side-effect-vrije functies), maar
  inconsistent met de rest van het bestand. Gefixt.

**Bekende, bewuste beperking:** dit whitelist het bedrag, niet de
specifieke les (dat zou een lesson_id + completions-tabel voor echte
idempotentie vereisen — een goede vervolgstap, nu niet gedaan). Wat wel
volledig dicht is: een client kan geen willekeurige total_xp meer
wegschrijven. Een dagelijkse cap (1000 XP/dag, server-side) begrenst verder
misbruik via het herhaald aanroepen van de RPC zelf.

**Nog te doen (jouw kant):** voer `supabase/schema.sql` uit in de Supabase
SQL Editor — dit bestand is idempotent (CREATE OR REPLACE, IF NOT EXISTS),
dus opnieuw draaien op een bestaande database is veilig.

### #2 Coins client-side — Gefixt (vervolg-sessie)
Volledig alsnog gedaan. `supabase/schema.sql` sectie 8: `earn_coins`,
`buy_heart`, `buy_streak_repair`, `buy_streak_shield`, `open_mystery_box`,
`create_gift_code`, `redeem_gift_code` — elke aankoop is één atomaire RPC
die spend + effect in dezelfde transactie doet, niet twee losse stappen die
een client uit elkaar kan trekken. `ArenaPage.tsx` en `DashboardPage.tsx`
zijn beide herwired: coins komen nu uit `user.coins` (server), niet meer
uit `localStorage`.

**Waarom dit eerst niet gedaan was, en nu wel:** de vorige sessie schatte
dit als hoog risico zonder `ArenaPage.tsx` (2200+ regels) gelezen te
hebben. Deze sessie is dat bestand wél volledig gelezen — de economie-
logica bleek geconcentreerd in ~170 losse, goed afgebakende regels
(niet verweven met de ~2000 regels quiz-rendering), waardoor chirurgisch
aanpassen zonder de rest aan te raken haalbaar werd.

**Belangrijke ontdekking tijdens het lezen:** de Mystery Box-kans-roll
(`rollMysteryPrize`) draaide volledig client-side. Zelfs mét server-
geverifieerde coin-spend zou een client nog steeds een verzonnen "ik heb
de jackpot gewonnen" kunnen rapporteren zonder dat ooit echt gebeurd is —
coins-erin-dan-willekeurig-coins-eruit, dwars door de net gedichte
spend-kant heen. De roll zelf is daarom ook server-side verplaatst
(`open_mystery_box`), met exact dezelfde kansverdeling.

**Hoe getest:**
- Mystery Box-kansverdeling: 20.002 (roll, hasShield)-combinaties
  vergeleken tussen client en SQL-port — 0 verschil. Plus een Monte
  Carlo-run over 1.000.000 rolls: alle 5 uitkomsten binnen 0,05% van de
  gedocumenteerde percentages (40/25/20/10/5%)
- Elke `updateProfile`/RPC-aanroep opnieuw getraceerd na de wijzigingen
- Project-brede typecheck vóór en ná vergeleken op foutcode-niveau: exact
  dezelfde categorieën, zelfde aantallen op 1 na — **één pre-existing bug
  incidenteel gefixt** (`DashboardPage.tsx` deed `addCoins(payload.amount)`
  waar `payload.amount` `number | undefined` kon zijn voor een shield-gift;
  die code-paden bestaan niet meer na de RPC-migratie)
- **Bug gevonden tijdens testen:** `hasStreakFreeze()`/`grantStreakFreeze()`
  in `streak.ts` zijn een boolean aan/uit-vlag ("een tweede Shield doet
  niets" — staat letterlijk zo in de originele code-comment), geen
  telbaar aantal. Mijn eerste `streak_freezes`-kolomontwerp uit de vorige
  sessie was een optelbare integer zonder cap. Overal waar dit nu
  daadwerkelijk geschreven wordt (`buy_streak_shield`, `open_mystery_box`,
  `redeem_gift_code`) is het expliciet capped op 1, niet opgehoogd — het
  juiste moment om dit recht te zetten was vóórdat er een eerste schrijver
  bijkwam, niet erna.

**Nieuw datamodel, bewust een ontwerpkeuze, niet een letterlijke port:**
"Repair Streak" (een AL gebroken streak herstellen) kon niet meer werken
zoals voorheen — dat las een lokale activiteitenkalender die de server niet
heeft. `buy_streak_repair()` controleert nu of de streak écht gebroken is
volgens `last_activity_date` (serverdata, niet client-kalender) en herstelt
naar continuïteit + streak=1, in plaats van te proberen een mogelijk
onherstelbaar vóór-de-breuk-getal terug te halen.

**Ook meegenomen, noodzakelijk om de rest niet zinloos te maken:** het oude
gift-code-systeem (`giftCode.ts`) was een zelf-dragende, client-decodeerbare
code — verzilveren ging nooit langs een server. Zodra coin-*uitgeven*
server-geverifieerd werd, bleef verzilveren de enige overgebleven manier om
gratis coins te minten. Nieuwe tabel `gift_codes` + `create_gift_code`/
`redeem_gift_code`: eenmalig, server-geregistreerd, niet meer na te maken.
`giftCode.ts`, `coins.ts` en `mysteryBox.ts` zijn niet verwijderd (hun
tests zouden anders ook weg moeten) maar wel duidelijk gemarkeerd als
vervangen — niets in de app importeert er nog uit.

**Bewust NIET server-side:** het hartjes-aantal zelf (0–5) en de 30-minuten
regen-timer blijven client-lokaal. Geen opgeslagen waarde om te bewaken —
alleen de aankoop ervan (coins) is dat wel, en die is wel gedekt.
`profiles.hearts` bestaat niet als kolom; dat is een bewuste keuze, geen
oversight (zie de testing-note in schema.sql sectie 8).

### #25 Arena localStorage — Gefixt (zie #2 hierboven)


### #3 Gift codes — Gefixt (zie #2 hierboven, dezelfde vervolg-sessie)
Was "bewust niet aangepakt" in de eerste sessie omdat coins nog niet
server-side waren. Nu die er zijn, moest dit mee — zie de uitleg bij #2.

### #5 AIChat "Coming Soon" — Bewust ongewijzigd
AIChat.tsx toont nog steeds "Coming Soon". Dat is intentioneel: je vroeg om
de provider makkelijk wisselbaar te maken, niet om de tutor nu al live te
zetten. De backend (api/chat.js + de nieuwe provider-laag) werkt al
volledig; alleen de UI-gate staat nog aan. Zeg het als je 'm nu wilt
ontgrendelen.

### #6 Verouderde AI-modelnaam in Settings — Gefixt
Nep-dropdown met "Claude 3.5 Haiku" + niet-werkende GPT-opties verwijderd.
Vervangen door een eerlijke, statische "AI Tutor · Coming soon"-indicator
die geen specifieke modelnaam meer noemt — juist omdat dat kan wisselen
tussen Claude/Gemini nu, zou een hardcoded naam hier exact dezelfde bug
opnieuw introduceren.

### #7 en #8 Interface-taal en leertaal door elkaar — Gefixt, 3 plekken
Gevonden en gefixt op alle drie plekken waar dit gebeurde:
- I18nContext.tsx: de auto-sync-useEffect volgde currentLanguage i.p.v.
  interfaceLanguage, en setUILanguage() schreef beide velden tegelijk
- SettingsPage.tsx regel 867: leertaal-picker schreef ook interfaceLanguage
- DashboardPage.tsx regel ongeveer 130: dezelfde bug in de dashboard-taalkeuze

Alle drie nu volledig onafhankelijk. OnboardingPage.tsx heeft een nieuwe,
aparte stap gekregen ("Wat wil je leren?" vóór "Welke app-taal?") — was 4
stappen, nu 5. Vertalingen toegevoegd in alle 5 talen (774/774/774/774/774,
pariteit na elke wijziging herverifieerd).

### #4 Premium-architectuur — Onderzocht en een kritieke bug gefixt
Bij het echt doorlichten (niet aangenomen dat de vorige inschatting nog
klopte) bleek dit ernstiger dan "nog niet helemaal duidelijk": **de hele
sessie-gebaseerde Ko-fi-betaalflow werkte principieel niet.**

`api/check-kofi-payment.js` zocht naar KV-sleutels met prefix
`kofi-payment:*` (direct én via de scan-fallback uit #9). `api/kofi-
webhook.js` — het enige bestand dat een binnenkomende Ko-fi-betaling ooit
verwerkt — schreef die sleutel nooit. Geen typo in het scan-patroon; er
was domweg geen enkel codepad dat een betaling koppelde aan de sessie die
de browser aan het pollen was. De betaalknop op `PremiumPage.tsx` staat
vandaag uit ("Coming Soon"), dus dit trof nog geen echte gebruiker — maar
was gegarandeerd stukgegaan zodra die knop aan zou gaan: iemand betaalt,
de webhook kent een token toe, en de app merkt het nooit. Voor altijd
"wachten op betaling".

**Fix:** de sessionId werd al meegestuurd in het Ko-fi-bericht (zie
`buildKofiUrl` in `create-kofi-session.js`) — die wordt nu in de webhook
uitgelezen en gebruikt om de sessie direct te markeren als geverifieerd.
`check-kofi-payment.js` is drastisch vereenvoudigd: één directe lookup,
geen scan meer nodig. Dit lost tegelijk #9 volledig op (geen architecturaal
zwakke scan meer — hij bestaat niet meer, punt).

**Twee bijkomende bugs gevonden tijdens het narekenen:**
- Het token in de webhook werd gegenereerd als `kt_{transactionId}_
  {timestamp}` — deels voorspelbaar (transactie-ID's volgen Ko-fi's eigen
  formaat, een timestamp is te benaderen als je ongeveer weet wanneer
  iemand betaalde), niet écht willekeurig. Nu `randomBytes(32)`, dezelfde
  sterkte als elders in dit bestand.
- `isPremiumPayment = amount >= premiumPrice` vergeleek een kaal getal
  zonder naar de valuta te kijken. `PREMIUM_PRICE_EUR` is, zoals de naam
  zegt, een EUR-bedrag — een betaling van "4.00" in een andere valuta
  (Ko-fi rekent niet zelf om) zou zijn geaccepteerd alsof het EUR was.
  Nu: `currency === "EUR" && amount >= premiumPrice`.

**Hoe getest:** volledige end-to-end simulatie met een functionerende
KV-mock — sessie aanmaken → webhook-payload met het echte Ko-fi-
veldformaat (geverifieerd tegen Ko-fi's eigen documentatie) → pollen. 11
scenario's, inclusief: verkeerd verificatietoken geweigerd, te laag bedrag
verleent geen premium, verzonnen sessionId lekt geen andermans token,
verkeerde valuta bij hetzelfde bedrag geweigerd. Alle 11 slagen.

**Bewust niet gedaan:** de "Coming Soon"-knop niet aangezet. De backend
werkt nu aantoonbaar, maar of/wanneer je live gaat is een productbeslissing
met mogelijk bredere overwegingen dan code — die maak ik niet voor je.

### #9 Ko-fi payment scan — Gefixt (zie #4 hierboven)
De architecturaal zwakke scan bestaat niet meer — opgelost door de
onderliggende koppelingsbug te fixen, niet door de scan te optimaliseren.

### #12 Password/email change dubbele sign-in — Deels gefixt

### Nog harder: gedrag gesimuleerd, niet alleen structuur gelezen
Gecheckt of een echte Postgres-instantie beschikbaar was om de SQL
daadwerkelijk tegen te draaien — geen netwerktoegang om te installeren,
geen SQL-parser voorgeïnstalleerd, `pypi.org` staat niet op de
toegestane lijst. Het hardst haalbare alternatief: `award_xp()`,
`reconcile_streak()` en `buy_streak_repair()` woord-voor-woord (opnieuw
vers uit `schema.sql` gelezen, niet uit geheugen) naar Python overgezet
en 37 scenario's doorgerekend, inclusief randgevallen die nog niet
eerder expliciet getest waren:

- Eerste-ooit award (NULL `last_activity_date`) — geen crash, streak
  correct naar 1.
- Zelfde dag twee keer XP verdienen — streak blijft gelijk, XP telt op.
- Exact op de dagelijkse cap-grens (990+10=1000 mag, 1000+5 niet).
- 2 dagen gemist mét shield → brugt en verbruikt 'm. 3 dagen gemist mét
  shield → **brugt NIET** en shield blijft gewoon staan (een shield dekt
  precies 1 gemiste dag, geen onbeperkte genade — bevestigd dat dit
  klopt met de opzet, niet een gok).
- **De combinatie die er het meest toe doet:** streak repareren, en
  dezelfde dag nog een les afmaken — twee aparte RPC-aanroepen na elkaar,
  zoals een echte gebruiker dat zou doen. Streak loopt correct door naar
  8 (niet terug naar 1). Dit is precies het soort samenspel tussen twee
  functies dat een geïsoleerde check per functie kan missen.

**37/37 geslaagd, 0 nieuwe bugs gevonden** — en dat is zelf ook een
eerlijk, waardevol resultaat: het bevestigt dat de logica standhoudt
onder gedragssimulatie, niet alleen bij structuur lezen.

### Slotronde: één grote consistentie-check over alles samen
Tot nu toe telkens per ronde getest. Nog niet gedaan: één keer alles
tegelijk vers nalopen, want met zoveel opeenvolgende wijzigingen aan
dezelfde bestanden (`schema.sql` vooral, maar ook `ArenaPage.tsx`/
`DashboardPage.tsx` die zowel in de coins-ronde als de TS-any-ronde zijn
aangeraakt) kan iets uit een vroege ronde in conflict raken met iets uit
een latere, zonder dat een per-ronde-test dat per se had gevangen.

**1 echte inconsistentie gevonden:** bij het handmatig tellen van functies/
grants/revokes in `schema.sql` (18 functies, maar 17 grants / 16 revokes —
klopte niet) bleek de **al bestaande** `handle_new_user()`-trigger (van
vóór deze hele sessie) als enige geen REVOKE te hebben, in tegenstelling
tot elke andere functie in het bestand — inclusief mijn eigen
trigger-functie `sync_profile_email` uit een eerdere ronde, die dat wél
kreeg. Geen actief risico (direct aanroepen buiten een echte trigger-
context zou toch falen, `NEW` is dan niet gebonden), maar wel een
inconsistentie in de beveiligingshouding van het bestand. Rechtgezet voor
volledigheid: 18 functies, 16 grants (2 trigger-functies horen er bewust
geen te hebben), 18 revokes — nu klopt het exact.

**Bijvangst, geen bug maar het melden waard:** die trigger is gedefinieerd
maar wordt nergens daadwerkelijk gekoppeld — geen `CREATE TRIGGER ...
AFTER INSERT ON auth.users` ernaar toe. De comment noemt 'm zelf een
"fallback", maar staat dus niet aan. Geen functioneel gat vandaag — de
registratieflow in de app zelf (`apiRegister`) maakt het profiel al
correct aan met eigen opruim-logica bij falen (al eerder deze sessie
bevestigd). Niet zelf gefixt: wat die fallback precies zou moeten doen
(welke gebruikersnaam genereer je automatisch?) is een productbeslissing,
geen bug om zomaar in te vullen.

**Verder nagelopen, alles bleek intact:**
- Elke `updateProfile()`-aanroep (9 stuks) nogmaals gecontroleerd — allemaal
  nog exact zoals ontworpen.
- Elke plek waar de oude client-side coin-functies ooit stonden — alleen
  nog in comments, geen enkele echte aanroep meer, ook niet per ongeluk
  teruggeslopen tijdens de latere TS-any-ronde op dezelfde bestanden.
- Alle 8 economie-RPC-aanroepen (`buy_heart`, `buy_streak_repair`,
  `open_mystery_box`, `earn_coins` ×2, `buy_streak_shield`,
  `create_gift_code`, `redeem_gift_code`) nog aanwezig en intact.
- `streak_freezes`: elke plek die 'm toekent zet 'm nog op exact 1 (nooit
  opgehoogd), de enige `-1` is de legitieme consumptie in `award_xp`.
- De XP-bereikscheck (1–100) nog steeds actief, niet per ongeluk
  teruggezet naar de kwetsbare exacte whitelist.

**Volledige her-uitvoering, niet opnieuw ingeschat maar echt gedraaid:**
project-brede typecheck (byte-identiek aan de laatst bekende goede staat)
plus alle 5 executable testbestanden van de hele sessie opnieuw gedraaid:
rate limiter (6/6), AI-providerselectie (6/6), AI request-vormen (20/20),
Ko-fi end-to-end (11/11), MFA-guard (6/6), plus de level-formule
(50.000+ waarden) en Mystery Box-verdeling (1.000.000 rolls) — alles
slaagt, 0 regressies.

### #18 Vertaalkwaliteit — grondig gecontroleerd binnen een harde grens
Ik ben geen native speaker van het Frans, Duits of Spaans, en kan dus geen
oordeel geven over toon en natuurlijkheid zoals een moedertaalspreker dat
zou doen — dat blijft een eerlijke grens. Wat wél objectief, programmatisch
te controleren is over alle 939 keys × 5 talen (4.695 strings):

1. **Placeholder-consistentie** ({xp}, {amount}, {minutes}, etc.) — exact
   het risico dat de audit zelf noemde ("nabij هیچ زمانێک placeholder
   ـێکی ون هەبێت"). Elke key se placeholder-set in EN vergeleken met NL/
   FR/DE/ES. **0 mismatches over de hele set.**
2. **Lege of alleen-witruimte vertalingen** — **0 gevonden.**
3. **Verdachte identieke tekst** tussen NL/FR/DE/ES voor dezelfde key
   (kandidaat voor een gemiste vertaling) — 3 kandidaten gevonden, alle 3
   nagelopen en legitiem gebleken: "AI Tutor" en "Premium" zijn bewust
   overal onvertaalde product-/functienamen (bevestigd door te checken of
   dit consistent is op ELKE plek waar ze voorkomen — dat is zo), niet
   gemiste vertalingen.
4. **Kapotte placeholder-tekst** (TODO, FIXME, undefined, [object Object],
   NaN) — eerste poging gaf treffers, bleken allemaal het Spaanse woord
   "todo" (= "alles") te zijn, geen developer-marker. Opnieuw gedraaid
   met hoofdlettergevoelige matching: **0 echte treffers.**

**Eerlijke samenvatting:** op elk punt dat ik objectief kan verifiëren
(structuur, volledigheid, placeholders, geen kapotte tekst) is de set
schoon. Toon en natuurlijke vloeiendheid per taal — met name of het Frans/
Duits/Spaans ook daadwerkelijk *lekker leest* voor een moedertaalspreker,
niet alleen grammaticaal correct is — kan alleen een native speaker
beoordelen. Dat geldt voor de hele bestaande set, niet alleen wat ik
vanavond zelf toevoegde.

### #15 TypeScript `any` — alle 31 implicit-any's opgelost
Elke resterende `noImplicitAny`-fout in het hele project opgezocht (31,
over 11 bestanden — allemaal `onChange`/`onKeyDown`/`onFocus`/`onBlur`/
`onClick`-handlers zonder type, plus één `onAuthStateChange`-callback in
`AuthContext.tsx`) en stuk voor stuk expliciet getypeerd:
`ChangeEvent<HTMLInputElement>`, `ChangeEvent<HTMLTextAreaElement>`,
`ChangeEvent<HTMLSelectElement>`, `KeyboardEvent`, `FocusEvent`,
`MouseEvent` — telkens het type dat bij het daadwerkelijke element hoort,
niet overal blind hetzelfde.

**Hoe getest:** eerst een pass met een te-minimale shim gedraaid, die
enorm veel ruis gaf (ontbrekende exports als `lazy`/`Suspense`/`Link`) —
niet vertrouwd, opnieuw gedraaid met de volledige, al eerder opgebouwde
shim. Daarbij bleek `FocusEvent` ook in díe shim te ontbreken — toegevoegd
vóór de vergelijking, niet genegeerd. Daarna: volledige project-diff met
de laatst bekende goede staat. Resultaat: exact 31 regels verdwenen, stuk
voor stuk allemaal `TS7006`, verder een byte-voor-byte identieke lijst
resterende (bevestigd pre-existing) fouten. 0 implicit-any's over.

### #26 Error handling — 2 lekken gefixt, rest bleek al in orde
Gericht gezocht naar plekken waar ruwe foutdetails naar de gebruiker
lekken in plaats van een veilige boodschap.

**2 echte lekken gevonden en gefixt** — `handleChangeEmail` en
`handleChangePassword` in `SettingsPage.tsx` plakten Supabase's ruwe
`error.message` achter de vertaalde foutmelding. Dubbel probleem: dat kan
interne details lekken (mild hier — Supabase's auth-fouten zijn redelijk
ingetogen, geen ruwe SQL, maar toch het verkeerde patroon), én het is
een eigen i18n-bug — Supabase's foutteksten zijn altijd Engels, dus een
Franse/Duitse/Spaanse gebruiker zag hun vertaalde label gevolgd door een
losse Engelse zin. Nu: ruwe fout naar console (developer-log blijft
bestaan), gebruiker ziet alleen de vertaalde, veilige boodschap.

**De rest bleek, na controle, al goed:**
- `ErrorBoundary.tsx` toont ruwe foutdetails al uitsluitend achter
  `import.meta.env.DEV` — in productie onzichtbaar. Al correct.
- `LoginPage.tsx`/`RegisterPage.tsx` gebruiken `err.message` uitsluitend
  voor exacte vergelijking met bekende, zelf-gegooide foutcodes
  (`rate_limited`, `email_taken`, etc.) — de gebruiker ziet nooit de
  ruwe tekst, altijd een vertaalde, veilige boodschap via de else-tak.
  Precies het patroon dat de audit vroeg; dit was al zo gebouwd.
- Alle `api/*.js`-endpoints doorzocht op `error.message` in een
  JSON-response — geen enkele treffer. De backend lekt nergens ruwe
  foutdetails.

### #17 grootste vondst: Voorwaarden + Privacybeleid volledig hardcoded
Bij het zoeken naar hardcoded strings vond ik iets veel groters dan losse
UI-teksten: `TermsPage.tsx` en `PrivacyPolicyPage.tsx` — 585 regels samen —
gebruikten **nul keer** `t()`. Sommige koppen waren wel bilingueel
(Nederlands/Engels naast elkaar), maar de hele juridische inhoud was
Nederlands-only. Een gebruiker met Engels, Frans, Duits of Spaans als
interfacetaal zag de Gebruiksvoorwaarden en het Privacybeleid altijd in
het Nederlands.

**Dit is anders dan de rest van vanavond, en dat verdient een aparte
noot.** Dit zijn juridisch bindende documenten met specifieke Belgische/
EU-rechtverwijzingen (art. 16.m van de Consumentenrichtlijn 2011/83/EU,
GDPR-artikelen, de Belgische Gegevensbeschermingsautoriteit). Ik heb dit
zorgvuldig vertaald — 159 nieuwe keys × 5 talen, met de officiële,
gestandaardiseerde EU/GDPR-terminologie per taal (bv. "droit de
rétractation" / "Widerrufsrecht" / "derecho de desistimiento" zijn de
échte, vastgelegde termen, niet iets dat ik verzin) — maar het vertalen
van een bindend juridisch document is wezenlijk anders dan "Daily Goal"
vertalen. **Laat de EN/FR/DE/ES-versies nalezen door een native speaker
of jurist voor je ze als evenwaardig aan het Nederlandse origineel
beschouwt.**

Nieuw toegevoegd, en dat ontbrak in geen enkele taal: een
`legal.translationNotice` — een expliciete clausule die zegt dat de
Nederlandse versie bindend is bij verschillen tussen taalversies. Zodra
er meerdere taalversies van hetzelfde juridische document bestaan is dat
standaardpraktijk, niet iets wat ik erbij verzin — de afwezigheid ervan
was zelf al een klein gat.

**Hoe getest:**
- Elke `t()`-aanroep in beide herschreven bestanden (162 stuks)
  programmatisch gematcht tegen de daadwerkelijk gedefinieerde keys —
  0 ontbrekend. Dit vangt precies het soort typfout dat anders pas
  opvalt als je toevallig die exacte pagina in die exacte taal bekijkt.
- Pariteit: 939/939/939/939/939 na de toevoeging (was 777 vóór deze
  ronde) — 162 nieuwe keys (159 inhoud + `legal.translationNotice` +
  `terms.back`/`privacy.back`), consistent over alle 5 talen.
- Volledige project-typecheck voor/na vergeleken: enige verschil is de
  bekende, al eerder bevestigde `navigate(-1)`-shimbeperking op een
  nieuwe regel — geen echte nieuwe fouten.

### Security headers (`vercel.json`) — CSP opgeschoond
Nederlandse audit vroeg expliciet: "controleer of CSP niet alleen bestaat,
maar ook echt werkt." Alle grote headers stonden er al goed (HSTS met
preload, X-Frame-Options, Referrer-Policy, Permissions-Policy, een
gedetailleerde CSP) — twee kleine, concrete verbeteringen:

- `connect-src` stond `https://api.anthropic.com` toe — maar sinds de
  provider-laag van vanavond gaat AI-verkeer altijd via `/api/chat`
  (same-origin); de browser praat nooit rechtstreeks met Anthropic of
  Gemini. Geverifieerd door de hele frontend te doorzoeken: geen enkele
  aanroep ernaartoe. Verwijderd — minder onnodig toegestaan oppervlak,
  zonder functieverlies.
- `frame-ancestors 'none'` toegevoegd — het CSP-eigen, modernere
  equivalent van `X-Frame-Options: DENY` (die al aanwezig was en blijft
  staan als fallback voor oudere browsers). Kost niets, sluit direct aan
  bij "frame protection" uit de audit-checklist.

**Bewust niet aangeraakt:** `frame-src`/`connect-src` entries voor Ko-fi
en PayPal. Die worden nu nergens gebruikt (geen iframe, geen aanroep in
`src/`), maar in tegenstelling tot de Anthropic-entry weet ik niet zeker
of dat blijft zo — de betaal-UI is nog niet gebouwd (de knop staat op
"Coming Soon"), dus dit is voorbereiding op iets dat nog niet af is, geen
bevestigde dode code. Verwijderen zou iemand later gewoon terug moeten
zetten.

Ook nagelopen: CORS-headers in alle `api/*.js`-bestanden. Consistent,
nergens een wildcard, elke variant (twee net iets verschillende patronen
in gebruik) is op zichzelf correct.

### Registratie-flow doorgelicht — grotendeels in orde
Rustig nagelopen, geen grote bug gevonden dit keer. `apiRegister()` is
zorgvuldig gebouwd: de username-check gebruikt terecht een RPC (een
eerdere, al-opgeloste bug had deze via een gewone `.select()` laten lopen,
die door RLS altijd "beschikbaar" teruggaf), e-mailbevestiging wordt
correct afgehandeld als die aanstaat, en een mislukte profiel-insert ruimt
het spook-auth-account netjes weer op — inclusief het geval waarin twee
mensen gelijktijdig dezelfde gebruikersnaam proberen te claimen.

Eén punt, gewoon om te vermelden, niet dramatisch: registratie zelf heeft
geen rate limiting vanuit de app (`callAuthGuard` wordt pas gebruikt vanaf
de login-functie erna). Of dit in de praktijk iets is om je zorgen over te
maken hangt af van wat Supabase's eigen platform-bescherming al afvangt —
dat kan ik hiervandaan niet verifiëren. Geen fix doorgevoerd; leek me een
grotere architectuurkeuze (een eigen endpoint ervoor bouwen) om er zomaar
doorheen te jagen, en niet dringend genoeg om dat risico te nemen.

### Bonus: wachtwoord-reset-pagina — een echte bypass gevonden
Bij het doorlichten van de reset-flow (nog niet eerder deze sessie
bekeken) controleerde `ResetPasswordPage.tsx` alleen "is er een sessie" om
te beslissen of iemand een geldige reset-link had aangeklikt. Dat klopt
niet: **wie al gewoon ingelogd is, heeft ook een sessie** — ook zonder ooit
een reset-mail te hebben aangevraagd. Wie tijdelijk toegang heeft tot een
ingelogde sessie (gestolen/gedeelde sessie, onbeheerd toestel) kon zo
direct naar `/reset-password` navigeren en een compleet nieuw wachtwoord
zetten — zonder ooit het huidige wachtwoord te hoeven weten. Precies de
bypass van de "bevestig eerst je huidige wachtwoord"-regel die Settings'
eigen Wachtwoord-wijzigen-flow (en, na de vorige ronde, 2FA uitschakelen)
wél correct afdwingt.

Geverifieerd tegen Supabase's eigen actuele documentatie voordat ik dit
aanpakte (een auth-flow verkeerd "verbeteren" op een gok is erger dan hem
laten staan): Supabase stuurt een specifiek `PASSWORD_RECOVERY`-event via
`onAuthStateChange` — "emitted **instead of** SIGNED_IN" precies wanneer
iemand een echte reset-link opent. De pagina luistert nu naar dát
specifieke event in plaats van naar "bestaat er een sessie."

**Hoe getest:** typecheck van het hele project voor/na vergeleken — 0
nieuwe fouten, alleen regelverschuiving. De timing van het event zelf
(komt de listener op tijd binnen voordat Supabase 'm afvuurt) kan ik niet
in een browser verifiëren — dit is wel exact het patroon uit Supabase's
eigen voorbeelden, maar test dit zelf één keer met een echte reset-mail
voor je het vertrouwt.

### Bonus: #19 WCAG — focus-traps in alle modals van de app
Kon geen echte browser/screenreader gebruiken, maar wél elk `role="dialog"`
in de hele codebase opgezocht (5 gevonden) en stuk voor stuk gecontroleerd
op wat de audit letterlijk noemde: "modals hebben geen volledige focus
trap." Twee soorten uitkomst:

- **`CookieBanner.tsx` had het al helemaal goed** — focus-trap, Escape,
  focus-restore, allemaal aanwezig. Bruikbaar als referentie-patroon.
- **4 andere modals misten het volledig**, ondanks dat ze wél correcte
  `role="dialog"`/`aria-modal`/`aria-label(ledby)` hadden: `ConfirmModal`
  (SettingsPage.tsx, bewaakt account-verwijdering), `CoinShop`
  (ArenaPage.tsx), `ConfirmDeleteModal` (MistakesPage.tsx), en `AIChat`
  (de AI Tutor-paneel). Zonder focus-trap: een screenreader-gebruiker
  krijgt geen signaal dat er een dialog is geopend (focus bleef op de
  knop die 'm opende), en Tab/Shift+Tab kon door de pagina ACHTER de
  modal blijven cyclen terwijl die nog zichtbaar in de weg stond.

Alle 4 nu consistent: focus verplaatst zich bij openen (naar Cancel bij de
destructieve bevestigingen — nooit naar de destructieve actie zelf), Tab
blijft binnen de dialog, Escape sluit, en focus keert terug naar het
element dat de modal opende zodra hij sluit.

**Hoe getest:** volledige typecheck na alle 4 wijzigingen — elke regel-
verschuiving in de diff had een exacte tegenhanger op de nieuwe regel-
nummers, geen enkele nieuwe foutsoort of nieuw bestand. `CoinShop` en
`AIChat` hebben allebei een `if (!open) return null` vóór hun return —
de nieuwe `useEffect` moest daarom vóór die check staan (Rules of Hooks),
met de `open`-check ín de effect-body in plaats van erbuiten; dat is
expliciet zo gecodeerd en toegelicht in de comments, niet per ongeluk
goed gegaan.

### Bonus: PayPal IPN (`ipn.js`) — ontdekt: losstaande, niet-aangesloten code
Bij het doorlichten van álle betaal-bestanden (niet alleen Ko-fi) bleek
`ipn.js` payment-records op te slaan die **nergens gelezen worden** — het
bestand verwijst zelf naar `/api/check-payment.js`, maar dat bestand
bestaat niet in deze codebase, en er is nul PayPal-UI in `src/`. De enige
"PayPal"-vermeldingen in de app staan in de Voorwaarden/Privacy-pagina's,
en beschrijven daar PayPal als betaalmethode BINNEN Ko-fi's eigen checkout
— niet deze losse, directe integratie.

Dit lijkt, gecombineerd met wat ik al weet over de KYC-beperking die
PayPal zelf ook vereist, restcode van een verkende en verlaten aanpak van
vóór de overstap naar Ko-fi — niet een feature die nog afgemaakt wordt. Ik
heb daarom **niet** het ontbrekende `check-payment.js` gebouwd (tijd
steken in een betaalpad dat mogelijk sowieso niet bruikbaar is voor jou is
geen goede afweging zonder dat eerst te bevestigen). Wel gefixt, want dit
endpoint staat *nu al* live en publiek bereikbaar op Vercel, los van of de
frontend het ooit aanroept:
- Rate limiting toegevoegd — ontbrak volledig, terwijl elk ander
  betaal-endpoint dit wel heeft, en dit bestand riep PayPal's servers aan
  vóór er ook maar iets van eigen validatie gebeurde
- Een dode, dubbele regel verwijderd (twee identieke method-checks na
  elkaar, waarvan de tweede nooit kon uitvoeren)

**Advies, geen actie ondernomen:** of je dit compleet maakt of verwijdert
is aan jou — ik zou eerst bevestigen of PayPal.me direct (los van Ko-fi)
nog een pad is dat je wil ondersteunen, gegeven de KYC-situatie.

### Bonus: GDPR-verwijdering (`delete-account.js`) — twee gaten gevonden
De kern van dit bestand is solide: verifieert de sessie van de aanvrager
zelf (nooit een client-aangeleverd account-ID vertrouwen), gebruikt de
Admin API, en `profiles` cascadeert correct via de database foreign key.
Twee dingen eromheen misten wel:

1. **Lokale voortgangsdata overleefde een verwijderd account.** `logout()`
   wist alleen de sessie, nooit de `langlearn_*` localStorage-sleutels
   (XP-historie, fouten, badges, streak-kalender, arena-state). Niets
   daarvan is aan een account-ID gekoppeld — dus als iemand (dezelfde
   persoon, of iemand anders op een gedeeld toestel) daarna een NIEUW
   account aanmaakt in dezelfde browser, zou dat nieuwe account stilletjes
   de oude, verwijderde geschiedenis erven. Gefixt door `handleDeleteAccount`
   dezelfde `resetAllLocalProgress()` te laten aanroepen die al voor de
   Reset Progress-knop bestond — hergebruikt, niet gedupliceerd.
2. **Data-export miste de gift-codes tabel** — logisch, want die heb ik
   deze sessie zelf toegevoegd, ná de laatste keer dat de export-functie
   geschreven was. Toegevoegd aan de export. **Bij het testen van mijn
   eigen toevoeging bleek de query niets terug te geven** — `gift_codes`
   heeft RLS aan staan met nul policies (bewust, want alleen de RPC's
   mogen ernaar schrijven), wat ook alle SELECTs blokkeert. Een
   read-only, eigen-rijen-alleen policy toegevoegd in schema.sql; zonder
   die stap had de export er stil en onopgemerkt niets van getoond.

**Hoe getest:** volledige typecheck opnieuw na alle wijzigingen dit blok —
0 nieuwe fouten. De RLS-policy-fout hierboven is precies het soort ding
dat alleen opvalt als je nagaat of nieuwe code ook echt data teruggeeft,
niet alleen of het compileert.

### Bonus: 2FA/MFA — twee kritieke gaten gevonden en gefixt
Niet uit de audit-lijst, maar bij het doorlichten van 2FA (security-
kritiek, nog niet eerder deze sessie geverifieerd) vond ik twee echte
gaten met dezelfde ernst als de Ko-fi-bug hierboven:

1. **2FA-code-verificatie had geen rate limiting.** `apiLogin()` beperkt
   het WACHTWOORD tot 5 pogingen per 15 minuten via `auth-guard.js` — maar
   de losse functie die de 6-cijferige TOTP-code checkt
   (`apiVerifyMfaLogin`) riep dat nooit aan. Iemand met een geldig (of
   elders gelekt) wachtwoord kon codes ongelimiteerd proberen. TOTP's
   30-seconden-rotatie maakt dit niet triviaal, maar dat is geen
   vervanging voor daadwerkelijke rate limiting — precies waar 2FA
   bescherming tegen hoort te bieden. Nu hergebruikt dezelfde
   auth-guard-mechaniek als het wachtwoord, met dezelfde (IP+identifier)-
   sleutel, dus een correct wachtwoord reset de teller één keer en
   verkeerde codes tellen daarna gewoon door.
2. **2FA uitschakelen was één klik, zonder enige bevestiging** — de enige
   actie in Settings die de beveiliging van een account VERLAAGT, en de
   enige die niet (zoals e-mail/wachtwoord wijzigen elders in hetzelfde
   bestand wél) het huidige wachtwoord opnieuw vraagt. Een actieve sessie
   is niet hetzelfde als "dit is gegarandeerd de accounteigenaar met volle
   intentie" — een gekaapte sessie of een gedeeld apparaat dat open bleef
   staan had zo een tijdelijke inbreuk in een permanente kunnen veranderen.
   Nu: wachtwoord opnieuw invoeren, exact hetzelfde patroon als de rest
   van deze pagina.

**Hoe getest:** `storage.ts`/`LoginPage.tsx`/`SettingsPage.tsx` opnieuw
door de volledige typecheck gehaald (0 nieuwe fouten — de 2 nieuwe
implicit-any's die mijn eigen nieuwe code introduceerde zijn alsnog
expliciet getypeerd, niet stilzwijgend meegenomen in de bestaande
pre-existing lijst). Daarnaast een echte, uitgevoerde test tegen
`auth-guard.js` zelf met een volledige KV-mock (inclusief `lpush`/`ltrim`/
`ttl`, die mijn eerste mock-poging nog miste — pas na het compleet maken
daarvan kon ik het gedrag betrouwbaar bevestigen): 5 verkeerde 2FA-codes
blokkeren de 6e poging met de juiste `retryAfterSeconds`, een andere
gebruiker blijft volledig onaangetast, en een geslaagde verificatie
reset de teller weer.
De dubbele sign-in-aanroep (`signInWithPassword` om het huidige wachtwoord
te verifiëren, vóór de eigenlijke wijziging) is intentioneel ongewijzigd
gelaten — Supabase heeft hier inmiddels een nieuwere ingebouwde aanpak voor
(`current_password`-parameter direct in `updateUser()`), maar ik was niet
zeker genoeg van de exacte vorm en versie-vereisten om dat blind te
vervangen zonder het te kunnen testen.

**Wel gefixt — de kern van waar de audit écht over ging:** e-mail wijzigen
schreef `profiles.email` onmiddellijk, ook al vereist Supabase standaard
een bevestigingslink (naar zowel het oude als het nieuwe adres) voordat de
échte auth-e-mail verandert. Als iemand die link nooit klikt — heel
gewoon, mensen negeren bevestigingsmails — bleef `profiles.email` voor
altijd een ander adres tonen dan waarmee ze daadwerkelijk inloggen. Fix op
databaseniveau, niet in de UI-code: een trigger (`sync_profile_email`,
schema.sql sectie 9) die `profiles.email` alleen bijwerkt op het moment
dat `auth.users.email` écht verandert — ongeacht welk codepad dat
veroorzaakte. `SettingsPage.tsx` schrijft nu helemaal niet meer naar
`profiles.email`.

### #23 Settings Daily Goal "future update" — Gefixt
De tekst loog: `setDailyGoal()`/`getDailyGoal()` bestonden al en werkten
al (onboarding gebruikt ze). Vervangen door een echte, werkende selector
met dezelfde 4 opties en labels als de onboarding-stap.


### #10 Rate limiter in server-memory — Gefixt, plus een bonus-bug
_helpers.js: van een in-memory Map naar @vercel/kv (dezelfde aanpak als
chat.js al gebruikte). Bug gevonden tijdens testen: alle 4 endpoints die
dit bestand importeerden (health, paypal, beide kofi-endpoints) deelden
onbedoeld hetzelfde budget binnen één warme instance — er was geen
scheiding per endpoint, ondanks dat elke aanroep zijn eigen maxRequests
meegaf. Toegevoegd: verplichte scope-parameter per endpoint.

**Hoe getest:** 6 executable tests tegen een echte in-memory KV-mock (niet
alleen gelezen): limiet correct toegepast en geblokkeerd na het maximum,
scopes lekken niet in elkaar, IP's delen geen budget, en een ontbrekende
scope gooit nu een fout i.p.v. stil hetzelfde probleem terug te
introduceren. 6/6 pass.

### #11 AI rate limiting fail-open — Gefixt
chat.js: `catch { return true }` is nu fail-closed (503, niet 429, zodat de
gebruiker het verschil ziet tussen "te snel" en "tijdelijk niet
beschikbaar"). Bewust anders dan _helpers.js (#10), waar fail-open nog
steeds de juiste keuze is — dat verschil staat toegelicht in de
code-comments op beide plekken.

---

## 2. P1 — belangrijk, deels gedaan

- #13 Lockfile ontbreekt — kan ik niet, geen netwerktoegang in deze
  omgeving. Draai zelf npm install en commit package-lock.json.
- #14 Build-gate/CI — Gefixt. .github/workflows/ci.yml: typecheck + test +
  build op elke push/PR. Zie "Actie vereist" hieronder.
- #15 TypeScript any opschonen — Gefixt. Alle 31 resterende implicit-any's
  opgelost, zie sectie 1 hierboven.
- #16 dangerouslySetInnerHTML — Gefixt. DOMPurify toegevoegd op beide
  plekken in GrammarLessonDesign.tsx, met een expliciete allowlist
  (strong, em, code, span, class). Eerlijkheidshalve: content komt uit
  developer-geschreven bestanden, niet user input — risico was al laag,
  dit is defense-in-depth.
- #17 Hardcoded strings — Grotendeels gefixt voor de twee grootste gevallen
  (Terms/Privacy, 585 regels, zie sectie 1 hierboven). Overige losse
  strings door de rest van de app niet stuk voor stuk nagelopen.
- #18 Translation quality — Grondig gecontroleerd binnen een harde grens:
  0 placeholder-mismatches, 0 lege vertalingen, 0 kapotte tekst over alle
  939 keys × 5 talen. Toon/natuurlijkheid per taal blijft native-speaker-
  werk. Zie sectie 1 hierboven.
- #19 WCAG volledig — Gedeeltelijk gefixt (zie sectie 1 hierboven, "Bonus:
  focus-traps"). Geen echte browser/screenreader-tests mogelijk, maar wel
  een grondige code-level controle van alle modals in de app.
- #20 Globale CSS-transitie — Gecontroleerd: was al gescoped (niet meer
  `*, *::before, *::after`) toen ik keek, lijkt al gefixt eerder.
- #21 Dubbele Google Fonts — Gefixt. Eén link in index.html met alle 4
  families, @import in index.css verwijderd.
- #22 Nep AI-modelkeuze in UI — Gefixt, zelfde fix als #6.
- #23 Settings Daily Goal "future update" — Gefixt, zie sectie 1 hierboven.
- #24 Reset Progress reset niet alles — Gefixt. resetAllLocalProgress()
  ruimt nu 16 localStorage-sleutels op (voltooide lessen, fouten, badges,
  arena-state, XP-historie, streak-data, etc.) — bewust niet: thema,
  UI-taal, cookie-consent, betaalstatus, onboarding-vlag, gebruikte
  gift-codes (zie code-comment voor de redenering per uitzondering).
  reset_learning_progress() (RPC) zet nu ook coins en streak_freezes
  terug naar 0, consistent met de rest van deze fix.
- #25 Arena localStorage — Gefixt in de vervolg-sessie, zie #2 hierboven.
- #26 Error handling — Gecontroleerd. 2 echte lekken gevonden en gefixt
  (SettingsPage.tsx), de rest van de app bleek dit patroon al correct
  toe te passen. Zie sectie 1 hierboven.

---

## 3. Belangrijke ontdekking tijdens het lezen van de code

Beide audits beschrijven een codebase die op een aantal punten al verder is
dan de documenten suggereren — met name payment/token-verificatie (#4, #9)
en delen van #20. Ik heb dit niet overal geverifieerd, maar het is de
moeite waard om te weten dat niet elk punt uit de audits nog actueel is
tegen déze ZIP.

---

## 4. Hoe ik getest heb (samenvatting)

Geen netwerktoegang in deze omgeving, dus geen npm install, geen echte vite
build, geen echte Supabase-verbinding. Wat ik wel heb gedaan:

1. Syntax-check elk aangepast/nieuw bestand — TypeScript's eigen parser
   (tsc, alleen TS1xxx-foutcodes, dus geen ruis van ontbrekende packages)
   voor .ts/.tsx, Node's --check voor .js
2. Een echte typecheck-omgeving opgebouwd met handgeschreven maar accurate
   shims voor React/Supabase/react-router (niet de "alles is any"
   kortste weg) — hiermee draaide een project-brede tsc --noEmit die twee
   shim-gaten en nul echte bugs in mijn eigen wijzigingen vond, en
   bevestigde dat de overige ongeveer 70 meldingen allemaal pre-existing
   zijn, in regels die ik niet heb aangeraakt
3. Executable tests, echt uitgevoerd, niet alleen gelezen: level-formule
   over 50.000+ waarden (0 verschil client vs. server), rate limiter (6
   tests tegen een functionerende KV-mock), AI-providers (26 tests
   inclusief request-vorm-verificatie via een gemockte fetch)
4. Handmatige trace van alle 9 updateProfile()-aanroepen in de hele
   codebase tegen de nieuwe routeringslogica
5. SQL-structuurcontrole: dollar-quote-paren, BEGIN/END-balans,
   functie/GRANT/REVOKE-aantallen — geen Postgres-verbinding beschikbaar
   om het echt te draaien

Dit verving geen echte npm run build / npm test op jouw machine — doe dat
sowieso nog, vooral omdat ik zelf niets heb kunnen draaien tegen een echte
Supabase-instantie.

---

## 5. Actie vereist — in deze volgorde

1. npm install lokaal (haalt dompurify binnen, genereert een lockfile — #13)
2. npm run typecheck — kan meteen een paar pre-existing fouten tonen (zie
   P1 #15 hierboven, o.a. SettingsPage.tsx regel 610/679,
   DashboardPage.tsx regel 200/773) — dat is bestaande schuld, geen
   regressie van vanavond, maar wel iets om te weten voor je op de CI
   vertrouwt
3. supabase/schema.sql volledig uitvoeren in de Supabase SQL Editor
   (idempotent, dus veilig opnieuw te draaien)
4. Vercel env vars: AI_PROVIDER + de bijbehorende key toevoegen (zie
   .env.example)
5. npm run build lokaal om zeker te zijn voor je pusht
6. Optioneel: branch protection aanzetten voor de nieuwe CI-check (zie
   comment bovenin .github/workflows/ci.yml)

## 6. Bekende, bewuste beperkingen (niet verzwegen)

- Server- en client-"vandaag" kunnen rond middernacht een uur uit elkaar
  liggen (server rekent in UTC, geen gebruikers-timezone opgeslagen) — een
  bekende, kleine edge case bij datum-gebaseerde streaks, niet volledig
  opgelost.
- Bij twee lessen die binnen dezelfde seconde worden afgerond kan de UI
  héél even een verouderd getal tonen voordat het zichzelf corrigeert
  zodra beide server-aanroepen zijn afgerond — nooit dataverlies, wel een
  kort visueel naijl-effect in een zeldzaam scenario.
