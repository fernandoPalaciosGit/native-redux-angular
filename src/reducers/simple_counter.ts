import { Action, Reducer } from '../models/redux_interface';

const getCounter = (action: Action): number => {
    const DEFAULT_COUNTER = 1;
    return typeof action.payload === 'number' ? action.payload : DEFAULT_COUNTER;
};
export const simpleCounter: Reducer<number> = (action: Action, state: number) => {
    switch (action.type) {
        case 'INCREMENT':
            state += getCounter(action);
            break;
        case 'DECREMENT':
            state -= getCounter(action);
            break;
    }
    return state;
};
