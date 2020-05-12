export interface Action {
    type: string;
    payload?: any
}

export interface Reducer<T> {
    (action: Action, oldState: T): T
}
