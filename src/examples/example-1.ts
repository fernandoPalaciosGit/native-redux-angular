import { sameState } from '../reducers/sameState';

const action = {
    type: 'return same state'
};
console.log(sameState(action, 34));
