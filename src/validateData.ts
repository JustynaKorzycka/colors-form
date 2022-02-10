import { IColor, IError } from "./interface"
import { changeRGBToArr, checkIfInRange } from "./utils"


export const validateData = (data: IColor): IError => {
  if (data.type === 'rgb') {

    if ( !/^\d{1,3},\d{1,3},\d{1,3},([0-1]*[.])\d{1,2}$/.test(data.color)) return {isError: true, message: 'Wrong value. The value must contains only numbers (without white spaces) in the system of 1-3,1-3,1-3,1.1-2. Ex: 111,234,50,1.0'}
    if(!checkIfInRange(changeRGBToArr(data.color), 0, 255)) return {isError: true, message: 'Values ​must be in the range 0-255. Ex: 0,255,33'}
  }
  if (data.type === 'hex') {
    if (! /^#?[a-fA-F0-9]{6}$/.test(data.color) && !/^#?[a-fA-F0-9]{6}\d{2}$/.test(data.color)) return  {isError: true, message: 'Wrong value. Enter a value with a length of 6-8 characters (numbers or digits) The last two numbers are for opacity.Ex: 331AAB20 or #331AAB20'}
  }
  return { isError: false, message: '' };
}