#### Test examples
```bash
npm run start
```

#### Vainilla Redux with a single reducer
```typescript
interface Action {
    type: string,
    payload?: any;
}

interface Reducer<T> {
    (action: Action, oldState: T): T
}

class Store<T> {
    private state: T;

    constructor(
        private readonly reducer: Reducer<T>,
        state: T
    ) {
        this.state = state;
    }

    getState(): T {
        return this.state;
    }

    dispatch(action: Action): void {
        this.state = this.reducer(action, this.state);
    }
}

// EXAMPLE
const INITIAL_STATE = 0;
const counterReducer: Reducer<number> = (action: Action, state: number) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += action.payload;
        case 'DECREMENT':
            return state += action.payload;
        default:
            return state;
    }
};
const counterStore = new Store(counterReducer, INITIAL_STATE);
const INCREMENT_ACTION: Action = {
    type: 'INCREMENT',
    payload: 12
};
counterStore.dispatch(INCREMENT_ACTION);
counterStore.dispatch(INCREMENT_ACTION);
counterStore.dispatch(INCREMENT_ACTION);
console.log(counterStore.getState()); // this.store === 36
```

#### Redux with library
```typescript
import { createStore, Store, Action, Reducer } from 'redux';

interface ActionPayload extends Action {
    payload?: any;
}

const counterReducer: Reducer = (state: number, action: ActionPayload) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += action.payload;
        default:
            return state;
    }
};
const INCREMENT: ActionPayload = {
    type: 'INCREMENT',
    payload: 12
};
const counterStore: Store<number> = createStore(counterReducer);
counterStore.subscribe(() => console.log(counterStore.getState())); // this.store === 12 , 24, 36
counterStore.dispatch(INCREMENT);
counterStore.dispatch(INCREMENT);
counterStore.dispatch(INCREMENT);

```
