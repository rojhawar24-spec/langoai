import type { GrammarLesson } from "../../types";
import { testLes } from "./test";
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

export const nlGrammar: GrammarLesson[] = [
  testLes,
  uitspraak,
  voorstellen,
  groeten,
  cijfersGetallen,
  kleuren,
  familie,
  boodschappen,
  cafe,
  routines,
  wegVragen,
  formulieren,
  lidwoorden,
];

