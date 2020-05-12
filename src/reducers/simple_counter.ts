import { Action, Reducer } from '../models/redux_interface';

const getCounter = (action: Action): number => {
    const DEFAULT_COUNTER = 1;
    return typeof action.payload === 'number' ? action.payload : DEFAULT_COUNTER;
};
export const simpleCounter: Reducer<number> = (action: Action, state: number) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += getCounter(action);
        case 'DECREMENT':
            return state -= getCounter(action);
        default:
            return state;
    }
};
