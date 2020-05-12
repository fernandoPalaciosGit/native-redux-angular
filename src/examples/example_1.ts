import { sameState } from '../reducers/same_state';
import { Action } from '../models/redux_interface';

const action: Action = {
    type: 'SAME_STATE'
};
console.log(sameState(action, 34));
