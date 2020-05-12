import { createStore, Store } from 'redux';
import { simpleCounterVendor } from '../reducers/simple_counter_vendor';
import { PayloadAction } from '../models/redux_interface';

const INCREMENT: PayloadAction = {
    type: 'INCREMENT',
    payload: 5
}
const DECREMENT: PayloadAction = {
    type: 'DECREMENT',
    payload: 15
}
const INCREMENT_ONCE: PayloadAction = {
    type: 'INCREMENT',
}
const counterStore: Store<number> = createStore(simpleCounterVendor);
counterStore.subscribe(() => console.log(counterStore.getState()));
counterStore.dispatch(INCREMENT);
counterStore.dispatch(DECREMENT);
counterStore.dispatch(INCREMENT_ONCE);
