import {countType} from '../types/countType'

interface Decreament{
      type:countType.DECREAMENT
      payload:number
}

interface Increament {
    type:countType.INCREAMENT
    payload:number
}

interface Default {
    type:countType.DEFAULT
    payload?:number
}


export type Action = Decreament | Increament | Default;