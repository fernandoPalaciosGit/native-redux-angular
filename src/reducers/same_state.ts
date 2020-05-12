import { Action, Reducer } from '../models/redux_interface';

export const sameState: Reducer<number> = (action: Action, state: number = 0): number => state;
