import {createStore, Store} from "redux";
import {simpleCounter} from "../reducers/simple_counter_vendor";

const INIT_STATE = 0;
const store: Store<number> = createStore<number>(simpleCounter);