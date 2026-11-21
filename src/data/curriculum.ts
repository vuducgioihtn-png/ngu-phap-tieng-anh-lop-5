import type { UnitData } from '../types/curriculum';
import { UNITS_1_TO_5 } from './units1to5';
import { UNITS_6_TO_10 } from './units6to10';
import { UNITS_11_TO_15 } from './units11to15';
import { UNITS_16_TO_20 } from './units16to20';

export const CURRICULUM_UNITS: UnitData[] = [
  ...UNITS_1_TO_5,
  ...UNITS_6_TO_10,
  ...UNITS_11_TO_15,
  ...UNITS_16_TO_20,
];

export const TOTAL_VOCAB_COUNT = CURRICULUM_UNITS.reduce(
  (sum, unit) => sum + unit.vocab.length,
  0
);
