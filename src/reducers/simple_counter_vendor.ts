import { Action, Reducer } from 'redux';
import { PayloadAction } from '../models/redux_interface';

const INIT_STATE = 0;
const DEFAULT_COUNTER = 1;
const getCounter = (action: Action): number => {
    const payload = (action as PayloadAction).payload;
    return typeof payload === 'number' ? payload : DEFAULT_COUNTER;
};
export const simpleCounterVendor: Reducer<number> = (state: number = INIT_STATE, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += getCounter(action);
        case 'DECREMENT':
            return state -= getCounter(action);
        default:
            return state;
    }
};
