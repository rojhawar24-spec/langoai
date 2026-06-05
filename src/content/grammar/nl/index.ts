import type { GrammarLesson } from "../../types";
import { uitspraak } from "./uitspraak";
import { voorstellen } from "./voorstellen";
import { groeten } from "./groeten";
import { cijfersGetallen } from "./cijfersGetallen";
import { kleuren } from "./kleuren";
import { familie } from "./familie";
import { boodschappen } from "./boodschappen";
import { cafe } from "./cafe";
import { routines } from "./routines";
import { wegVragen } from "./wegVragen";
import { formulieren } from "./formulieren";
import { lidwoorden } from "./lidwoorden";
import { zelfstandigNaamwoord } from "./zelfstandigNaamwoord";
import { verwijswoorden } from "./verwijswoorden";
import { meervoud } from "./meervoud";
import { persoonlijkeVoornaamwoordenOnderwerp } from "./persoonlijkeVoornaamwoordenOnderwerp";
import { persoonlijkeVoornaamwoordenObject } from "./persoonlijkeVoornaamwoordenObject";
import { gereduceerdevormen } from "./gereduceerdevormen";
import { bezittelijkeVoornaamwoorden } from "./bezittelijkeVoornaamwoorden";
import { aanwijzendeVoornaamwoorden } from "./aanwijzendeVoornaamwoorden";
import { onbepaaldeVoornaamwoorden } from "./onbepaaldeVoornaamwoorden";
import { hoofdtelwoorden } from "./hoofdtelwoorden";
import { rangtelwoorden } from "./rangtelwoorden";
import { voorzetsels } from "./voorzetsels";
import { bijwoorden } from "./bijwoorden";
import { infinitiefStamIkvorm } from "./infinitiefStamIkvorm";
import { tegenwoordigeTijd } from "./tegenwoordigeTijd";
import { ovt } from "./ovt";
import { gebiedendeWijs } from "./gebiedendeWijs";
import { hoofdzinMededelend } from "./hoofdzinMededelend";
import { vraagzinnenjanee } from "./vraagzinnenjanee";
import { vraagzinnenVraagwoord } from "./vraagzinnenVraagwoord";
import { ontkenningNiet } from "./ontkenningNiet";
import { ontkenningGeen } from "./ontkenningGeen";
import { persoonsvorm } from "./persoonsvorm";
import { onderwerp } from "./onderwerp";
import { luisterenStation } from "./luisterenStation";
import { leesvaardigheidAdvertenties } from "./leesvaardigheidAdvertenties";
import { schrijfvaardigheidBericht } from "./schrijfvaardigheidBericht";
import { spreekvaardigheidVoorstellen } from "./spreekvaardigheidVoorstellen";
import { feestdagen } from "./feestdagen";
import { zelfevaluatieA1 } from "./zelfevaluatieA1";
import { belangrijkeWerkwoorden } from "./belangrijkeWerkwoorden";
import { hoofdletters } from "./hoofdletters";
import { kleineletters } from "./kleineletters";
import { accenttekens } from "./accenttekens";
import { tremaApostrof } from "./tremaApostrof";
import { koppelteken } from "./koppelteken";
import { leestekens } from "./leestekens";
import { tussenklanken } from "./tussenklanken";
import { aaneenschrijvenOfLos } from "./aaneenschrijvenOfLos";
import { telbaarNietTelbaarNominalisatie } from "./telbaarNietTelbaarNominalisatie";
import { bijvoeglijkNaamwoord } from "./bijvoeglijkNaamwoord";
import { trappenVanVergelijking } from "./trappenVanVergelijking";
import { zelfstandigBezittelijkVoornaamwoord } from "./zelfstandigBezittelijkVoornaamwoord";
import { wederkerendVoornaamwoord } from "./wederkerendVoornaamwoord";
import { wederkerigVoornaamwoord } from "./wederkerigVoornaamwoord";
import { breukenGetallen } from "./breukenGetallen";
import { voorzetselsTijdPlaatsUitgebreid } from "./voorzetselsTijdPlaatsUitgebreid";
import { nevenschikkendeVoegwoorden } from "./nevenschikkendeVoegwoorden";
import { onderschikkendeVoegwoorden } from "./onderschikkendeVoegwoorden";
import { tKofschip } from "./tKofschip";
import { vtt } from "./vtt";
import { otttZullen } from "./otttZullen";
import { onvoltooidDeelwoord } from "./onvoltooidDeelwoord";
import { voltooidDeelwoord } from "./voltooidDeelwoord";
import { infinitiefMetTe } from "./infinitiefMetTe";
import { kaleInfinitief } from "./kaleInfinitief";
import { scheidbareWerkwoorden } from "./scheidbareWerkwoorden";
import { verwarrendeWerkwoordparen } from "./verwarrendeWerkwoordparen";
import { hulpwerkwoordKeuze } from "./hulpwerkwoordKeuze";
import { lijdendeVorm } from "./lijdendeVorm";
import { inversieHoofdzin } from "./inversieHoofdzin";
import { vraagzinnenMetPartikels } from "./vraagzinnenMetPartikels";
import { gebiedendeZinnen } from "./gebiedendeZinnen";
import { bijzinSov } from "./bijzinSov";
import { soortenBijzinnen } from "./soortenBijzinnen";
import { lijdendVoorwerp } from "./lijdendVoorwerp";
import { meewerkendVoorwerp } from "./meewerkendVoorwerp";
import { partitieveS } from "./partitieveS";
import { gebiedendeWijsPartikels } from "./gebiedendeWijsPartikels";
import { beleefdheidsverzoekenZou } from "./beleefdheidsverzoekenZou";
import { gevoelensEnMeningen } from "./gevoelensEnMeningen";
import { formeelEnInformeel } from "./formeelEnInformeel";
import { a2SpeedrunCheatSheet } from "./a2SpeedrunCheatSheet";
import { leesvaardigheid } from "./leesvaardigheid";
import { afsprakenMaken } from "./afsprakenMaken";
import { schrijfvaardigheidBriefVerslag } from "./schrijfvaardigheidBriefVerslag";
import { spreekvaardigheid } from "./spreekvaardigheid";
import { afkortingen } from "./afkortingen";
import { zinssymbolen } from "./zinssymbolen";
import { betrekkelijkVoornaamwoord } from "./betrekkelijkVoornaamwoord";
import { vragendVoornaamwoord } from "./vragendVoornaamwoord";
import { uitroependVoornaamwoord2 } from "./uitroependVoornaamwoord2";
import { hetWoordEr } from "./hetWoordEr";
import { voornaamwoordelijkBijwoord } from "./voornaamwoordelijkBijwoord";
import { vasteVoorzetselcombinaties } from "./vasteVoorzetselcombinaties";
import { modalePartikels } from "./modalePartikels";
import { partikelCombinaties } from "./partikelCombinaties";
import { focuspartikels } from "./focuspartikels";
import { voltooidVerledenTijd } from "./voltooidVerledenTijd";
import { voltooidToekomendeTijd } from "./voltooidToekomendeTijd";
import { onvoltooidVerledenToekomendeTijd } from "./onvoltooidVerledenToekomendeTijd";
import { aanvoegendeWijs } from "./aanvoegendeWijs";
import { progressiefconstructies } from "./progressiefconstructies";
import { onscheidbareWerkwoorden } from "./onscheidbareWerkwoorden";
import { wederkerendeWerkwoorden } from "./wederkerendeWerkwoorden";
import { onpersoonlijkeWerkwoorden } from "./onpersoonlijkeWerkwoorden";
import { modaleWerkwoorden } from "./modaleWerkwoorden";
import { koppelwerkwoorden } from "./koppelwerkwoorden";
import { werkwoordelijkeUitdrukkingen } from "./werkwoordelijkeUitdrukkingen";
import { hebbenZijnZullen } from "./hebbenZijnZullen";
import { sterkeWerkwoorden } from "./sterkeWerkwoorden";
import { passiefAlleTijden } from "./passiefAlleTijden";
import { vooropplaatsing } from "./vooropplaatsing";
import { bijvoeglijkeBijzinnen } from "./bijvoeglijkeBijzinnen";
import { beknopteBijzinnen } from "./beknopteBijzinnen";
import { indirecteRede } from "./indirecteRede";
import { ingebeddeVragen } from "./ingebeddeVragen";
import { tangconstructie } from "./tangconstructie";
import { stapelwerkwoorden } from "./stapelwerkwoorden";
import { voorzetselvoorwerp } from "./voorzetselvoorwerp";
import { naamwoordelijkGezegde } from "./naamwoordelijkGezegde";
import { werkwoordelijkGezegde } from "./werkwoordelijkGezegde";
import { bijwoordelijkeBepaling } from "./bijwoordelijkeBepaling";
import { congruentie } from "./congruentie";
import { verbaleStijl } from "./verbaleStijl";
import { stijlfoutenTautologiePleonasme } from "./stijlfoutenTautologiePleonasme";
import { voltooidDeelwoordAlsBijvoeglijkNaamwoord } from "./voltooidDeelwoordAlsBijvoeglijkNaamwoord";
import { aanHetInVoltooideTijden } from "./aanHetInVoltooideTijden";
import { volgordeBijwoordelijkeBepalingen } from "./volgordeBijwoordelijkeBepalingen";
import { zinsverzachtendMaar } from "./zinsverzachtendMaar";
import { discussiesVoeren } from "./discussiesVoeren";
import { gevoelensEnNuance } from "./gevoelensEnNuance";
import { telefonerenOfficieleInstanties } from "./telefonerenOfficieleInstanties";
import { solliciteren } from "./solliciteren";
import { luistervaardigheidC1 } from "./luistervaardigheidC1";
import { leesvaardigheidC1 } from "./leesvaardigheidC1";
import { schrijfvaardigheidC1 } from "./schrijfvaardigheidC1";

export const nlGrammar: GrammarLesson[] = [
  uitspraak,
  voorstellen,
  groeten,
  cijfersGetallen,
  kleuren,
  familie,
  routines,
  boodschappen,
  cafe,
  wegVragen,
  formulieren,
  lidwoorden,
  zelfstandigNaamwoord,
  verwijswoorden,
  meervoud,
  persoonlijkeVoornaamwoordenOnderwerp,
  persoonlijkeVoornaamwoordenObject,
  gereduceerdevormen,
  bezittelijkeVoornaamwoorden,
  aanwijzendeVoornaamwoorden,
  onbepaaldeVoornaamwoorden,
  hoofdtelwoorden,
  rangtelwoorden,
  voorzetsels,
  bijwoorden,
  infinitiefStamIkvorm,
  tegenwoordigeTijd,
  ovt,
  gebiedendeWijs,
  hoofdzinMededelend,
  vraagzinnenjanee,
  vraagzinnenVraagwoord,
  ontkenningNiet,
  ontkenningGeen,
  persoonsvorm,
  onderwerp,
  luisterenStation,
  leesvaardigheidAdvertenties,
  schrijfvaardigheidBericht,
  spreekvaardigheidVoorstellen,
  feestdagen,
  zelfevaluatieA1,
  belangrijkeWerkwoorden,
  hoofdletters,
  kleineletters,
  accenttekens,
  tremaApostrof,
  koppelteken,
  leestekens,
  tussenklanken,
  aaneenschrijvenOfLos,
  telbaarNietTelbaarNominalisatie,
  bijvoeglijkNaamwoord,
  trappenVanVergelijking,
  zelfstandigBezittelijkVoornaamwoord,
  wederkerendVoornaamwoord,
  wederkerigVoornaamwoord,
  breukenGetallen,
  voorzetselsTijdPlaatsUitgebreid,
  nevenschikkendeVoegwoorden,
  onderschikkendeVoegwoorden,
  tKofschip,
  vtt,
  otttZullen,
  onvoltooidDeelwoord,
  voltooidDeelwoord,
  infinitiefMetTe,
  kaleInfinitief,
  scheidbareWerkwoorden,
  verwarrendeWerkwoordparen,
  hulpwerkwoordKeuze,
  lijdendeVorm,
  inversieHoofdzin,
  vraagzinnenMetPartikels,
  gebiedendeZinnen,
  bijzinSov,
  soortenBijzinnen,
  lijdendVoorwerp,
  meewerkendVoorwerp,
  partitieveS,
  gebiedendeWijsPartikels,
  beleefdheidsverzoekenZou,
gevoelensEnMeningen,
formeelEnInformeel,
leesvaardigheid,
a2SpeedrunCheatSheet,
afsprakenMaken,
schrijfvaardigheidBriefVerslag,
spreekvaardigheid,
afkortingen,
zinssymbolen,
betrekkelijkVoornaamwoord,
vragendVoornaamwoord,
uitroependVoornaamwoord2,
hetWoordEr,
voornaamwoordelijkBijwoord,
vasteVoorzetselcombinaties,
modalePartikels,
partikelCombinaties,
focuspartikels,
voltooidVerledenTijd,
voltooidToekomendeTijd,
onvoltooidVerledenToekomendeTijd,
aanvoegendeWijs,
progressiefconstructies,
onscheidbareWerkwoorden,
wederkerendeWerkwoorden,
onpersoonlijkeWerkwoorden,
modaleWerkwoorden,
koppelwerkwoorden,
werkwoordelijkeUitdrukkingen,
hebbenZijnZullen,
sterkeWerkwoorden,
passiefAlleTijden,
vooropplaatsing,
bijvoeglijkeBijzinnen,
beknopteBijzinnen,
indirecteRede,
ingebeddeVragen,
tangconstructie,
stapelwerkwoorden,
voorzetselvoorwerp,
naamwoordelijkGezegde,
werkwoordelijkGezegde,
bijwoordelijkeBepaling,
congruentie,
verbaleStijl,
stijlfoutenTautologiePleonasme,
voltooidDeelwoordAlsBijvoeglijkNaamwoord,
aanHetInVoltooideTijden,
volgordeBijwoordelijkeBepalingen,
zinsverzachtendMaar,
discussiesVoeren,
gevoelensEnNuance,
telefonerenOfficieleInstanties,
  solliciteren,
  luistervaardigheidC1,
  leesvaardigheidC1,
  schrijfvaardigheidC1,
];