import { Action, Reducer } from '../models/reduxInterface';

export const sameState: Reducer<number> = (action: Action, state: number = 0): number => state;
