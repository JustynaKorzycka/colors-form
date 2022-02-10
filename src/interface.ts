export interface IColor{
  color: string;
  type: string;
  toDelete: boolean;
  id: number;
  rgbArr: number[]
}

export interface IError{
  isError: boolean;
  message: string;
}
export interface IContext {
  userColors: IColor[];
  colorsToShow: IColor[];
  addUserColor: (color: IColor) => void;
  deleteUserColor: (color: IColor) => void;
  changeColorsToShow: (bigRed: boolean, bigGreen: boolean, bigBlue: boolean, bigSaturation: boolean) => void;
}

