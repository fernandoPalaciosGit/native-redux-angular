import { Reducer } from 'redux';
import { PayloadAction } from '../models/redux_interface';

const INIT_STATE = 0;
const DEFAULT_COUNTER = 1;
const getCounter = (action: PayloadAction): number => {
    return typeof action.payload === 'number' ? action.payload : DEFAULT_COUNTER;
};
export const simpleCounterVendor: Reducer<number> = (state: number = INIT_STATE, action: PayloadAction) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += getCounter(action);
        case 'DECREMENT':
            return state -= getCounter(action);
        default:
            return state;
    }
};
