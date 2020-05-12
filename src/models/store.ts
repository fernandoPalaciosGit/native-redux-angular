import {Action, Reducer} from "./redux_interface";

export class Store<T> {
    private state: T;

    constructor(
        private reducer: Reducer<T>,
        initState: T
    ) {
        this.state = initState;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(action, this.state);
    }
}
