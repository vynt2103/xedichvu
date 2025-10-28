/**
 * Mock Data - Operators List
 * 
 * This file aggregates all operator data from separate files.
 * Each operator is maintained in its own file under lib/operators/
 * for better organization and maintainability.
 */

import { Operator } from './types';
import { dinhNghiaTravel, daiHiepTravel } from './operators';

export const OPERATORS: Operator[] = [
  dinhNghiaTravel,
  daiHiepTravel,
];

