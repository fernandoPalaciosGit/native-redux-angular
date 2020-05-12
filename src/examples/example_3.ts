import {Store} from "../models/store";
import {simpleCounter} from "../reducers/simple_counter";
import {Action} from "../models/redux_interface";


const INIT_STATE = 0;
const store = new Store(simpleCounter, INIT_STATE);
console.log(store.getState());

const INCREMENT: Action = {
    type: 'INCREMENT',
    payload: 20
};
store.dispatch(INCREMENT);
console.log(store.getState());

const DECREMENT: Action = {
    type: 'DECREMENT',
    payload: 15
};
store.dispatch(DECREMENT);
console.log(store.getState());