import type { GrammarLesson } from "../../types";
import { testLes } from "./test";
import { uitspraak } from "./uitspraak";
import { voorstellen } from "./voorstellen";
import { groeten } from "./groeten";
import { cijfersGetallen } from "./cijfersGetallen";   // ✅ streepje toegevoegd
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
import { persoonlijkeVoornaamwoordenOnderwerp } from "./persoonlijkeVoornaamwoordenOnderwerp"; // ✅ routines staat nu maar 1 keer
import { persoonlijkeVoornaamwoordenObject } from "./persoonlijkeVoornaamwoordenObject"; // ✅ routines staat nu maar 1 keer
import { gereduceerdevormen } from "./gereduceerdevormen";
import { bezittelijkeVoornaamwoorden } from "./bezittelijkeVoornaamwoorden";
import { aanwijzendeVoornaamwoorden } from "./aanwijzendeVoornaamwoorden";
import { onbepaaldeVoornaamwoorden } from "./onbepaaldeVoornaamwoorden";
import { hoofdtelwoorden} from "./hoofdtelwoorden";
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

export const nlGrammar: GrammarLesson[] = [


  testLes,
  uitspraak,
  voorstellen,
  groeten,
  cijfersGetallen,
  kleuren,
  familie,
  routines,         // ✅ routines staat nu nog maar 1 keer
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

];