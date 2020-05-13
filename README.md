#### Test examples
```bash
npm run start
```

#### Vainilla Store with a single reducer
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
counterStore.getState(); // this.store === 36
```
