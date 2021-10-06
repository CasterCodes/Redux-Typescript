
import {Dispatch} from 'redux';
import { Action } from '../interfaces/countInterface';
import { countType } from '../types/countType';

export const increaseCount = (amount:number) => (dispatch: Dispatch<Action>) => {
   dispatch({type:countType.INCREAMENT, payload:amount})
}

export const decreaseCount = (amount:number) => (dispatch: Dispatch<Action>) => {
      dispatch({type:countType.DECREAMENT, payload:amount});
}

export const defaultCount = () => (dispatch: Dispatch<Action>) => {
      dispatch({type:countType.DEFAULT});
}