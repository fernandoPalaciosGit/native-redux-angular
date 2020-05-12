import { Action } from '../models/redux_interface';
import { simpleCounter } from '../reducers/simple_counter';

const NOOP: Action = {
    type: 'NOOP'
}
console.log(simpleCounter(NOOP, 12));

const INCREMENT: Action = {
    type: 'INCREMENT'
}
console.log(simpleCounter(INCREMENT, 12));

const INCREMENT_NUMBER: Action = {
    type: 'INCREMENT',
    payload: 10
}
console.log(simpleCounter(INCREMENT_NUMBER, 12));

const DECREMENT_NUMBER: Action = {
    type: 'DECREMENT',
    payload: 10
}
console.log(simpleCounter(DECREMENT_NUMBER, 12));
