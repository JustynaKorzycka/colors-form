import { IColor } from "./interface";

export const changeRGBToArr = (rgb: string): number[] => {
  let rgbStr: string = rgb; 
  if (rgb.includes('rgba')) {
    rgbStr = rgbStr.replace('rgba(', '');
    rgbStr= rgbStr.replace(')', '');

  }
  const arr = rgbStr.split(",");
  const numbersArr = arr.map(item=>Number(item))
  return numbersArr;
}

export const checkIfInRange = (arr: number[], min: number, max: number): boolean => {
  let inRange: number = 0;
  arr.map((number, index) => {
    if (index === 3) (number < 0 || number > 1) && inRange++
    else (number < min || number > max) && inRange++
  });

  return !Boolean(inRange) 
}

export const writeRGB = (rgb: string) => {
  let rgbString: string = `rgba(${rgb})`;
  return rgbString;
}

export const writeHex = (hex: string) => {
  const hasHash: boolean = hex.includes('#');
  let hexString: string; 
  hasHash ? hexString = hex : hexString = `#${hex}`;
  return hexString;
}

export const changeColorSpell = (color: IColor) => {
  color.type === 'hex' ? color.color = writeHex(color.color) : color.color = writeRGB(color.color);
  return color;
}

export const getNewColorId = (colors: IColor[]) => {
  const arrlength: number = colors.length;
  if(!arrlength) return 1
  return colors[arrlength - 1].id+1;
}

export const hexToRGBArr = (hex: string) => {
  let hexStr: string = hex;
  if (hexStr.includes('#')) hexStr = hexStr.slice(1);
  let r: number = parseInt(hexStr.slice(0, 2), 16);
  let g: number = parseInt(hexStr.slice(2, 4), 16);
  let b: number = parseInt(hexStr.slice(4, 6), 16);
  let a: number
  hexStr.length === 6 ? a = 1 : a = parseInt(hexStr.slice(6)) / 100;
  const rgbArr: number[] = [r, g, b, a];
  return rgbArr;
}

export const changeColorToArr = (color: string, type: string) => {
  let rgbArr: number[];
  type === 'hex' ? rgbArr = hexToRGBArr(color) : rgbArr = changeRGBToArr(color);
  return rgbArr;
}

export const sortColorFunc = (a: IColor, b: IColor) => {
  if (a.rgbArr[0] === b.rgbArr[0]) {
      if (a.rgbArr[1] === b.rgbArr[1]) return b.rgbArr[2] - a.rgbArr[2]
      return b.rgbArr[1] - a.rgbArr[1]
    } 
    return b.rgbArr[0] - a.rgbArr[0]
}