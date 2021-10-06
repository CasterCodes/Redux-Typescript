import {Action} from '../interfaces/countInterface'
import { countType } from '../types/countType';

const initialState = 0;

const countReducer = (state :number = initialState, action: Action):number => {
    switch(action.type) {
         case countType.INCREAMENT:
             return state + action.payload;
         case countType.DECREAMENT:
             return state - action.payload;
         case countType.DEFAULT:
             return 0;
         default:
             return state;
    }
}


export default countReducer;