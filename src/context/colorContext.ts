import { createContext, useContext } from "react";
import {  IContext } from "../interface";

const defaultState = {
  userColors: [],
  colorsToShow: [],
  addUserColor: () => { },
  deleteUserColor: () => { },
  changeColorsToShow: ()=>{}
}

export const ColorContext = createContext<IContext>(defaultState)

export const useColorContext = () => useContext(ColorContext);

